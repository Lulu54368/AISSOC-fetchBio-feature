package com.example;

import com.example.model.Politician;
import org.apache.ibatis.type.MappedTypes;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@MappedTypes(Politician.class)
@MapperScan("com.example.mapper")
@SpringBootApplication
public class BioFetchApplication {

	public static void main(String[] args) {
		SpringApplication.run(BioFetchApplication.class, args);
	}

}
