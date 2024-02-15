import renderPage from "./render/page"
import { URL } from "./tools/constants"
import request from "./tools/request"

request(URL).then(({ data }) => renderPage(data))
