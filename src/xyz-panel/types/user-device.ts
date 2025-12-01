import z from "zod"

const schemaUserDeviceData = z.object({
    guid: z.string(),
    activity_type: z.string(),
    activity_description: z.string(),
    device_uuid: z.string(),
    device_type: z.string(),
    language: z.string(),
    manufacturer: z.string(),
    model: z.string(),
    os: z.string(),
    os_version: z.string(),
    region: z.string(),
    sdk_version: z.string(),
    app_name: z.string(),
    app_version_code: z.string(),
    app_version_name: z.string(),
    ip_address: z.string(),
    user_agent: z.string(),
    created_at: z.string(),
    created_at_client: z.string(),
    updated_at_client: z.string(),
    updated_at: z.string()
})

const schemaUserDeviceResponse = z.object({
    success: z.boolean(),
    status: z.number(),
    message: z.string(),
    data: z.array(schemaUserDeviceData),
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

export type SchemaUserDeviceResponse = z.infer<typeof schemaUserDeviceResponse>
export type SchemaUserDeviceData = z.infer<typeof schemaUserDeviceData>
