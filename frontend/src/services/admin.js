import api from './auth';
import axios from 'axios';

const API_URL = "https://hospital-management-v4yu.onrender.com/api/";

const publicApi = axios.create({
  baseURL: API_URL,
});

class AdminService {
    getDepartments() {
        return publicApi.get('departments');
    }

    addDepartment(department) {
        return api.post('/departments', department);
    }

    deleteDepartment(id) {
        return api.delete(`/departments/${id}`);
    }

    getDashboardStats() {
        return api.get('/admin/stats');
    }

    registerDoctor(doctorData) {
        return api.post('/admin/register-doctor', doctorData);
    }
}

export const adminService = new AdminService();
