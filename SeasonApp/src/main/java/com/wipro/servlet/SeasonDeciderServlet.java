package com.wipro.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDate;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class SeasonDeciderServlet extends HttpServlet {

	public void service(HttpServletRequest hreq,HttpServletResponse hres) throws ServletException, IOException{
		
		//Set Response Content Type
		hres.setContentType("text/html");
		
		//get printwriter
		PrintWriter pw = hres.getWriter();
		
		//Get System Date and Time
		LocalDate ldt=LocalDate.now();	//static factory method
		
		//get current month
		int month=ldt.getMonthValue(); //gives between 1 to 12
		
		//decide the season name
		if(month>=3 && month<=6)
			pw.println("<h1 style='color:green;text-align:center'>Season Name: :Summer Season</h1>");
		else if(month>=7 && month<=10) 
			pw.println("<h1 style='color:red;text-align:center'>Season Name::Rainy Season</h1>");
		else
			pw.println("<h1 style='color:blue;text-align:center'>Season Name::Winter Season</h1>");
		//add home hyperlink
		pw.println("<br><br><a href='http://localhost:1010/SeasonApp/page.html'>Home</a>");
	}
}
