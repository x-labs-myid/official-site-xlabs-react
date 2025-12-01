import z from "zod";

export const schemaTermRequest = z.object({
    apps_guid: z.string(),
    name: z.string(),
    content: z.string(),
    public: z.boolean()
})

const schemaTermData = z.object({
    guid: z.string(),
    slug: z.string(),
    name: z.string(),
    content: z.string(),
    public: z.string(),
    apps_guid: z.string(),
    users_guid: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
    deleted_at: z.string().nullable(),
    app_name: z.string()
})

const schemaTermResponse = z.object({
    success: z.boolean(),
    status: z.number(),
    message: z.string(),
    data: z.array(schemaTermData)
})

export type SchemaTermRequest = z.infer<typeof schemaTermRequest>
export type SchemaTermData = z.infer<typeof schemaTermData>
export type SchemaTermResponse = z.infer<typeof schemaTermResponse>