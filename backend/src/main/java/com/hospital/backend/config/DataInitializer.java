package com.hospital.backend.config;

import com.hospital.backend.entity.Role;
import com.hospital.backend.entity.User;
import com.hospital.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private com.hospital.backend.repository.DepartmentRepository departmentRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        if (!userRepository.existsByEmail("admin@hospital.com")) {
            User admin = User.builder()
                    .email("admin@hospital.com")
                    .password(passwordEncoder.encode("admin123"))
                    .role(Role.ROLE_ADMIN)
                    .fullName("System Administrator")
                    .phone("1234567890")
                    .build();
            userRepository.save(admin);
            System.out.println("Default Admin Account Created: admin@gmail.com / admin123");
        }

        if (departmentRepository.count() == 0) {
            departmentRepository.save(com.hospital.backend.entity.Department.builder()
                    .name("Cardiology")
                    .description("Heart and cardiovascular system")
                    .build());
            departmentRepository.save(com.hospital.backend.entity.Department.builder()
                    .name("Neurology")
                    .description("Brain and nervous system")
                    .build());
            departmentRepository.save(com.hospital.backend.entity.Department.builder()
                    .name("Pediatrics")
                    .description("Children's health")
                    .build());
            System.out.println("Default Departments Created");
        }
    }
}
