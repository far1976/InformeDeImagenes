package com.informedeimagenes.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.context.annotation.PropertySource;

import com.informedeimagenes.controller.base.EcografiaBaseController;

@RestController
@PropertySource("classpath:${configfile.path}/InformeDeImagenes.properties")
@RequestMapping(value="${endpoint.api}", headers = "Accept=application/json")
public class EcografiaController extends EcografiaBaseController {

	//OVERRIDE HERE YOUR CUSTOM CONTROLLER

}
