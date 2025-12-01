import z from "zod";

const schemaApiLogData = z.object({
    guid: z.string(),
    endpoint: z.string(),
    method: z.string(),
    ip_address: z.string(),
    user_agent: z.string(),
    created_at: z.string()
})

const schemaApiLogResponse = z.object({
    success: z.boolean(),
    status: z.number(),
    message: z.string(),
    data: z.array(schemaApiLogData),
    pagination: z.object({
        currentUri: z.string(),
        uri: z.string(),
        hasMore: z.boolean(),
        total: z.number(),
        perPage: z.number(),
        pageCount: z.number(),
        pageSelector: z.string(),
        currentPage: z.number(),
        next: z.string().nullable(),
        previous: z.string().nullable(),
        segment: z.number()
    }),
    total: z.number()
})

export type SchemaApiLogResponse = z.infer<typeof schemaApiLogResponse>
export type SchemaApiLogData = z.infer<typeof schemaApiLogData>