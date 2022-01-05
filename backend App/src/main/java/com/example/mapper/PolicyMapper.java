package com.example.mapper;

import com.example.model.Policy;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface PolicyMapper {
    @Select("select * from article where id = #{id}")
    List<Policy> selectPolicyById (int id);
}
