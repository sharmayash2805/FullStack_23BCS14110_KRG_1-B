package com.example.ques2;

/*
 Short concept notes:

 - Purpose: This class is a JPA entity representing an Employee table row.
 - Key annotations used:
     * @Entity         -> marks the class as a persistence entity
     * @Table(name=..) -> maps class to a DB table
     * @Id             -> primary key field
     * @GeneratedValue(strategy = GenerationType.IDENTITY)
                                         -> uses DB auto-increment for the id
     * @Column(...)    -> column constraints (nullable, unique, precision/scale)
 - Data types:
     * Long for id (primary key), String for name/email, BigDecimal for salary (currency-safe precision).
 - Implements Serializable to allow safe serialization of entity objects.
 - Note: imports use Jakarta Persistence (`jakarta.persistence.*`). If your project uses older Java EE APIs, change to `javax.persistence.*`.

*/

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.math.BigDecimal;

@Entity
@Table(name = "employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal salary;

    public Employee() {
    }

    public Employee(String name, String email, BigDecimal salary) {
        this.name = name;
        this.email = email;
        this.salary = salary;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public BigDecimal getSalary() {
        return salary;
    }

    public void setSalary(BigDecimal salary) {
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", salary=" + salary +
                '}';
    }
}
