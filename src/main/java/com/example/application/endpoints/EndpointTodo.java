package com.example.application.endpoints;

import java.util.List;

import com.example.application.Todo;
import com.example.application.TodoRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.Endpoint;

@Endpoint
@AnonymousAllowed
public class EndpointTodo {
    
    private TodoRepository repository;

    public EndpointTodo(TodoRepository repository) {
        this.repository = repository;
    }

    public  List<Todo> findAll() {
        return repository.findAll();
    }

    public Todo add(String task) {
        return repository.save(new Todo(task));
    }
    public Todo update(Todo todo) {
        return  repository.save(todo);
    }
}
