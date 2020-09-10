# Juan's Utilities Module

---

## Documentation for utilities

<!-- ## Validation

#### Validation Options

| Name       | Purpose                                                              | Type       | Default |
| ---------- | -------------------------------------------------------------------- | ---------- | ------- |
| `strict`   | Requires the object to contain only items that constraints exist for | `boolean`  | `false` |
| `required` | Requires the object to contain at least the items in the array       | `string[]` | `[]`    |
--- -->

### Logging

#### Traditional logging

This logging utility exposes the following methods

| Name    | Purpose                                                                                                                                                |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Log`   | `console.log` but with the twist of color,time and other logger benefits                                                                               |

#### Request logging

• Request Method \
• Request Path \
• Status Code \
• Response Time in `ms` \
• Client IP Address \
• Response Size `B/KB/MB/GB`

---

### Request Responses

| Name      | Response Format                            | Parameters                                                |
| --------- | ------------------------------------------ | --------------------------------------------------------- |
| `Success` | `{ success: true, data }`                  | `res: Response, status: number, data?: any`               |
| `Failed`  | `{ error: true, code, data }`              | `res: Response, status: number, code: string, data?: any` |
| `Missing` | `{ error: true, code: 'route_not_found' }` | `res: Response`                                           |
| `Catch`   | `{ error: true, code: 'catch', data }`     | `res: Response, data?: any`                               |
