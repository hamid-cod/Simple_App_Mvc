/*global $, alert, console */

$(document).ready(function(){
	'use strict';

	function showErr(selecteur) {
      $(selecteur).css('border','1px solid #F00').parent().find('.custom-alert').show(200);
   }
   function hideErr(selecteur) {
      $(selecteur).css('border','1px solid #F00').parent().find('.custom-alert').hide(200);
   }

	var prenomError = true,
       nomError = true,
       emailError = true,
       vEmailError = true,
       userError = true,
       genreError = true,
       jourError = true,
       moisError = true,
       anneeError = true,
       passError = true,
       validPassError = true;

	$("#eye1").click(function(){
      $("#eye11").toggleClass('fa-eye-slash').toggleClass('fa-eye');
      if($('#eye11').hasClass('fa fa-eye-slash')) {
         $("#password").attr('type', 'password');
      }
      if($('#eye11').hasClass('fa fa-eye')) {
         $("#password").attr('type', 'text');
      }
   });
   $("#eye2").click(function(){
      $("#eye22").toggleClass('fa-eye-slash').toggleClass('fa-eye');
      if( $('#eye22').hasClass('fa fa-eye-slash')) {
         $("#valid_pass").attr('type', 'password');
      }
      if( $('#eye22').hasClass('fa fa-eye')) {
         $("#valid_pass").attr('type', 'text');
      }
   });
   $('.modifier').click(function() {
      $('.swal2-backdrop-show').fadeOut();
   });
   /**/
   $('.prenom').blur(function() {
      if($(this).val().length <= 3) {
         showErr(this);
         prenomError = true;
      }
      else {
         hideErr(this);
         prenomError = false;
      }
   });
   $('.nom').blur(function() {
      if($(this).val().length <= 3) {
         showErr(this);
         nomError = true;
      }
      else {
         hideErr(this);
         nomError = false;
      }
   });
   $('.r_email').blur(function() {
      if($(this).val() === '') {
         showErr(this);
         emailError = true;
      }
      else {
         hideErr(this);
         emailError = false;
      }
   });
   $('.valid_email').blur(function() {
      if($(this).val() !== $('.r_email').val()) {
         showErr(this);
         vEmailError = true;
      }
      else {
         hideErr(this);
         vEmailError = false;
      }
   });
   $('.username').blur(function() {
      var username =  $(this).val();
      if($(this).val().length <= 3) {
         showErr(this);
         userError = true;
      }
      else {
         hideErr(this);
         // $.ajax({
         //    url:'',
         //    method:   'POST',
         //    dataType: 'json',
         //    cache:    false,
         //    timeout:  7000,
         //    data:{user_name:username},
         //    success:function(data){
         //       if(data != '0'){ userError = false; }
         //       else { userError = true; }
         //    }
         // })
         userError = false;
      }
   });
   $('.genre').blur(function() {
      if($(this).val() == 2) {
         showErr(this);
         genreError = true;
      }
      else {
         hideErr(this);
         genreError = false;
      }
   });
   $('.mois').blur(function() {
      if($(this).val() == 0) {
         showErr(this);
         moisError = true;
      }else {
         hideErr(this);
         moisError = false;
      }
   });
   $('.jour').blur(function() {
      if($(this).val() == 0) {
         showErr(this);
         jourError = true;
      }else {
         hideErr(this);
         jourError = false;
      }
   });
   $('.annee').blur(function() {
      if($(this).val() == 0) {
         showErr(this);
         anneeError = true;
      }else {
         hideErr(this);
         anneeError = false;
      }
   });
   $('.password').blur(function() {
      if($(this).val().length <= 3 && $(this).val() == '') {
         showErr(this);
         passError = true;
      }
      else {
         hideErr(this);
         passError = false;
      }
   });
   $('.valid_pass').blur(function() {
      if($(this).val() != $('.password').val() || $(this).val() == '') {
         showErr(this);
         validPassError = true;
      }
      else {
         hideErr(this);
         validPassError = false;
      }
   });
   console.log(prenomError);
   /*
   $('.form_register').submit(function(e) {
      // e.preventDefault();
      console.log(prenomError);
      console.log(nomError);
      console.log(emailError);
      console.log(vEmailError);
      console.log(userError);
      console.log(genreError);
      console.log(jourError);
      console.log(moisError);
      console.log(anneeError);
      console.log(passError);
      console.log(validPassError);
      if (prenomError === true||nomError === true||emailError === true||vEmailError === true||userError === true||genreError === true||jourError === true||moisError === true||anneeError === true||passError === true||validPassError === true) {
         e.preventDefault();
         $('.prenom, .nom, .r_email, .valid_email, .username, .genre, .jour, .mois, .annee, .password, .valid_pass').blur();
         alert('Not Submit');
      }
      else {
         alert('submit');
      }
   });
   /**/
   /*
   $('.password').focus(function() {
      if($('.genre').val() == 2) {
         showErr('.genre');
         genreError = true;
      }else {
         hideErr('.genre');
         genreError = false;
      }
      if($('.jour').val() == 0) {
         showErr('.jour');
         jourError = true;
      }else {
         hideErr('.jour');
         jourError = false;
      }
      if($('.mois').val() == 0) {
         showErr('.mois');
         moisError = true;
      }else {
         hideErr('.mois');
         moisError = false;
      }
      if($('.annee').val() == 0) {
         showErr('.annee');
         anneeError = true;
      }else {
         hideErr('.annee');
         anneeError = false;
      }
   });
   */
});