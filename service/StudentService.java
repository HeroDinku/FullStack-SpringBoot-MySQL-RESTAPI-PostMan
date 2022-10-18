package com.dinkucode.studentsystem.service;

import com.dinkucode.studentsystem.model.Student;

import java.util.List;

public interface StudentService {

  public Student saveStudent(Student student);
  public List<Student> getAllStudents();

}
