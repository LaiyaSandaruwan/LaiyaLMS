﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LaiyaLMS.Controllers
{
    public class AccountController : Controller
    {
        // GET: Account
        public ActionResult Index()
        {
            //Login Screen
            return View();
        }

        public ActionResult FogotPassword()
        {
            return View();
        }
    }
}