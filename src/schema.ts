import { z } from "astro:content"
import r from '../resume.json'

const ResumeSchema = z.object({
    basics: z.object({
        name: z.string(),
        label: z.string(),
        image: z.string(),
        email: z.string(),
        url: z.string(),
        download: z.string(),
        summary: z.string(),
        location: z.object({
            address: z.string().optional(),
            city: z.string(),
            country: z.string(),
            timezone: z.string(),
            maps: z.string()
        }),
        profiles: z.array(z.object({
            network: z.string(),
            username: z.string(),
            url: z.string()
        }))
    }),
    work: z.array(z.object({
        name: z.string(),
        position: z.string(),
        remote: z.boolean(),
        url: z.string(),
        startYear: z.string(),
        endYear: z.string().optional(),
        summary: z.string()
    })),
    education: z.array(z.object({
        institution: z.string(),
        url: z.string(),
        area: z.string(),
        studyType: z.string(),
        startYear: z.string(),
        endYear: z.string().optional()
    })),
    certificates: z.array(z.object({
        name: z.string(),
        date: z.string(),
        issuer: z.string(),
        url: z.string()
    })),
    publications: z.array(z.object({
        name: z.string(),
        publisher: z.string(),
        releaseDate: z.string(),
        url: z.string(),
        summary: z.string()
    })),
    skills: z.array(z.string()),
    languages: z.array(z.object({
        language: z.string(),
        fluency: z.string()
    })),
    projects: z.array(z.object({
        name: z.string(),
        releaseDate: z.string(),
        description: z.string(),
        url: z.string(),
        repository: z.string(),
        isActive: z.boolean(),
        keywords: z.array(z.string())
    }))
})

function getResume(): z.infer<typeof ResumeSchema> | undefined {
    try {
        if (!r) {
            throw new Error('resume.json not found')
        }
        return ResumeSchema.parse(r)
    } catch (e) {
        if (e instanceof z.ZodError) {
            console.error(e.message)
        } else {
            console.error(e)
        }
        return undefined
    }
}

export const resume = getResume()
