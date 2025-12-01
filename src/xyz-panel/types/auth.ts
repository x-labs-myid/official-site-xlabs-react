import z from "zod"

const schemaUserData = z.object({
    guid: z.string(),
    email: z.string(),
    first_name: z.string(),
    middle_name: z.string(),
    last_name: z.string(),
    username: z.string(),
    role: z.string(),
})

export const schemaLoginRequest = z.object({
    email: z.string(),
    password: z.string(),
})

export const schemaLoginResponse = z.object({
    success: z.boolean(),
    status: z.number(),
    message: z.string(),
    data: z.object({
        access_token: z.string(),
        expires_in: z.number(),
        user: schemaUserData,
    }),
    pagination: z.string().nullable(),
})

export type SchemaLoginRequest = z.infer<typeof schemaLoginRequest>
export type SchemaUserData = z.infer<typeof schemaUserData>
export type SchemaLoginResponse = z.infer<typeof schemaLoginResponse>