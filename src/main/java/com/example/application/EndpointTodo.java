package com.example.application;

import java.util.List;

import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.Endpoint;
import dev.hilla.Nonnull;

@Endpoint
@AnonymousAllowed
public class EndpointTodo {
    
    private RepositoryTodo repository;

    public EndpointTodo(RepositoryTodo repository) {
        this.repository = repository;
    }

    public @Nonnull List<@Nonnull Todo> findAll() {
        return repository.findAll();
    }

    public Todo saveTodo(Todo todo) {
        return repository.save(todo);
    }
}
