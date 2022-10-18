package com.dinkucode.studentsystem.controller;


import com.dinkucode.studentsystem.model.Student;
import com.dinkucode.studentsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
  @Autowired
  private StudentService studentService;

  @PostMapping("/add")
  public String add( @RequestBody Student student) {
  studentService.saveStudent(student);
  return "New Student added successfully";

  }
  @GetMapping("/getAll")
  public List<Student> getAllStudents() {
    return studentService.getAllStudents();
  }

}
