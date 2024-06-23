import { authorized } from "../axios";

export default {
    adminLogin(params) {
        return authorized.post(`/admin/login`, params)
    }
}