import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, School, Award } from "lucide-react";

const educationData = [
    {
        icon: <School className="h-8 w-8 text-primary" />,
        institution: "Ahmadu Bello University",
        degree: "B.sc Economics",
    },
    {
        icon: <School className="h-8 w-8 text-primary" />,
        institution: "Swiss E-learning Institute",
        degree: "Web Development & E-commerce",
    },
];

const certificationData = [
    {
        icon: <Award className="h-6 w-6 text-accent" />,
        name: "E-business",
        issuer: "Google",
    },
    {
        icon: <Award className="h-6 w-6 text-accent" />,
        name: "Web Development",
        issuer: "Alison",
    },
    {
        icon: <Award className="h-6 w-6 text-accent" />,
        name: "Diploma in Ethical Hacking",
        issuer: "Alison",
    },
]

export function Education() {
  return (
    <section id="education" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Education
            </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <Book className="h-6 w-6"/>
                        Formal Education
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {educationData.map((edu, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div>{edu.icon}</div>
                            <div>
                                <h3 className="font-semibold text-lg">{edu.institution}</h3>
                                <p className="text-muted-foreground">{edu.degree}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <Award className="h-6 w-6"/>
                        Online Certifications
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {certificationData.map((cert, index) => (
                        <div key={index} className="flex items-center gap-3">
                           {cert.icon}
                           <div>
                             <p className="font-medium">{cert.name}</p>
                             <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                           </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
