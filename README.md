##Request Responses
| Name      | Response Format                          | Parameters                                                |
| --------- | :--------------------------------------- | :-------------------------------------------------------- |
| `Success` | `{success: true, data}`                  | `res: Response, status: Number, data?: any`               |
| `Failed`    | `{error: true, code, data}`              | `res: Response, status: number, code: string, data?: any` |
| `Missing`   | `{error: true, code: 'route_not_found'}` | `res: Response, data?: any`                               |
| `Catch`   | `{error: true, code: 'catch', data}`     | `res: Response:, data?: any`                              |


