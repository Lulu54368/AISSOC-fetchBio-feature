package com.example.mapper;

import java.util.List;

import com.example.model.Profile;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.example.model.Politician;
import org.apache.ibatis.annotations.SelectKey;

@Mapper
public interface PoliticianMapper {
	@Select("select * from politics")
	List<Politician> findAll();
	@Select("select * from politics where id = #{id}")
	Politician getById(int id);
}
