package com.example.bioFetch;

import com.example.model.Politician;
import org.apache.ibatis.type.MappedTypes;
import org.junit.jupiter.api.Test;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.test.context.SpringBootTest;
@MappedTypes(Politician.class)
@MapperScan("com.example.mapper")
@SpringBootTest
class BioFetchApplicationTests {

	@Test
	void contextLoads() {
	}

}
