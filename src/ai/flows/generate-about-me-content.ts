'use server';

/**
 * @fileOverview Generates 'About Me' section content using AI based on a template and user-provided keywords.
 *
 * - generateAboutMeContent - A function that generates the 'About Me' content.
 * - GenerateAboutMeContentInput - The input type for the generateAboutMeContent function.
 * - GenerateAboutMeContentOutput - The return type for the generateAboutMeContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAboutMeContentInputSchema = z.object({
  template: z
    .string()
    .describe('The template to use for generating the about me content.'),
  keywords: z
    .string()
    .describe(
      'Keywords to personalize the about me content, comma separated.'
    ),
});

export type GenerateAboutMeContentInput = z.infer<
  typeof GenerateAboutMeContentInputSchema
>;

const GenerateAboutMeContentOutputSchema = z.object({
  content: z.string().describe('The generated about me content.'),
});

export type GenerateAboutMeContentOutput = z.infer<
  typeof GenerateAboutMeContentOutputSchema
>;

export async function generateAboutMeContent(
  input: GenerateAboutMeContentInput
): Promise<GenerateAboutMeContentOutput> {
  return generateAboutMeContentFlow(input);
}

const generateAboutMeContentPrompt = ai.definePrompt({
  name: 'generateAboutMeContentPrompt',
  input: {schema: GenerateAboutMeContentInputSchema},
  output: {schema: GenerateAboutMeContentOutputSchema},
  prompt: `You are an expert copywriter specializing in creating About Me sections for personal portfolio websites.

  You will receive a template and a list of keywords. Use the keywords to fill in the template to create a personalized and engaging About Me section.
  The output should be a well-written paragraph suitable for use on a professional portfolio website.
  Do not include a title like "About Me", just the content.
  
  Template: {{{template}}}

  Keywords: {{{keywords}}}`,
});

const generateAboutMeContentFlow = ai.defineFlow(
  {
    name: 'generateAboutMeContentFlow',
    inputSchema: GenerateAboutMeContentInputSchema,
    outputSchema: GenerateAboutMeContentOutputSchema,
  },
  async input => {
    const {output} = await generateAboutMeContentPrompt(input);
    return output!;
  }
);
