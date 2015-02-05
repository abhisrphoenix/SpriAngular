package com.eim.home;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.eim.domain.User;


@Controller
public class Home {
	
	@RequestMapping(value="/userHome",produces = "application/json; charset=utf-8")
	@ResponseBody
	public User userHome() {

		User user = new User();
		user.setDesig("SA");
		user.setUserName("Abhilash");

		return user;
	}

	@RequestMapping(value="/myData",produces = "application/json; charset=utf-8")
	@ResponseBody
	public Integer[] barData() {

		Integer[] myData = {10,20,30,40,60, 80, 20, 50};

		return myData;
	}
	

}
