package com.example.application;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface RepositoryTodo extends JpaRepository<Todo, Integer> {
    
}
