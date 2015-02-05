package com.eim.domain;

import java.io.Serializable;

public class User implements Serializable {

	private String userName;
	private String desig;

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getDesig() {
		return desig;
	}

	public void setDesig(String desig) {
		this.desig = desig;
	}

}
