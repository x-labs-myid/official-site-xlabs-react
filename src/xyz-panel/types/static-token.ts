import z from "zod"

export const schemaStaticTokenRequest = z.object({
    token: z.string(),
    type: z.string(),
    name: z.string(),
    allowed_routes: z.array(z.string()),
    is_active: z.boolean(),
})

const schemaStaticTokenData = z.object({
    guid: z.string(),
    token: z.string(),
    type: z.string(),
    name: z.string(),
    allowed_routes: z.string(),
    is_active: z.boolean(),
    created_by: z.string(),
    created_at: z.string(),
    updated_by: z.string(),
    updated_at: z.string(),
    deleted_at: z.string().nullable(),
})

const schemaStaticTokenResponse = z.object({
    success: z.boolean(),
    status: z.number(),
    message: z.string(),
    data: z.array(schemaStaticTokenData)
})

export type SchemaStaticTokenRequest = z.infer<typeof schemaStaticTokenRequest>
export type SchemaStaticTokenData = z.infer<typeof schemaStaticTokenData>
export type SchemaStaticTokenResponse = z.infer<typeof schemaStaticTokenResponse>
