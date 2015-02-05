package com.eim.home;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ResHome {

	@RequestMapping(value="/")
    public String index(){
        return "redirect:/index.html";
    }  
	@RequestMapping(value="/Resonance")
    public String indexPage(){
        return "redirect:/index.html";
    } 


}
