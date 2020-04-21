import React from "react"
import $ from "jquery";

import PallotKoti from "./komponetit/PallotKoti"
import PallotVieras from "./komponetit/PallotVieras"
import Ajastin from "./komponetit/Ajastin"
import VapaaPallo from "./komponetit/VapaaPallo"


export default class App extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      p1_break_piste: props.p1_break_piste,
      p2_break_piste: props.p2_break_piste,
      p1_frame_piste: props.p1_frame_piste,
      p2_frame_piste: props.p2_frame_piste,
      pelaaja: props.pelaaja,
      lippu: props.lippu, // 0 seuraavaksi punainen 1 seuraavaksi väri 
      p1_max_piste: props.p1_max_piste, // mahdollinen maksimipistemäärä alussa
      p2_max_piste: props.p2_max_piste,
      punaisia: props.punaisia, // paljonko punaisia pöydässä jäljellä
      vpisteet: props.vpisteet,
      elems: document.getElementsByClassName("button"),
      p1_nimi: '',
      p2_nimi: '',
      show: false,
      vapaapallo: 0,
      nykyisen_pelaaja_nimi: '',
      
    }
    this.onChange = (e) => this._onChange(e);
  }

  vuoronVaihto() { // Vaihtaa aktiivisena olevaa pelaajaa
    console.log("Vuoronvaihto")
    if (this.state.pelaaja === 1) {
      this.setState({nykyisen_pelaaja_nimi: this.state.p2_nimi});
      $(".pelaaja2").css("background-color", "#666666");
      $(".pelaaja1").css("background-color", "");
      $('.pelaaja2 > .button').prop('disabled', false);
      $('.pelaaja1 > .button').prop('disabled', true);
      
      if(this.state.punaisia === 0 ){
        $('.pelaaja1 > .punainen').prop('disabled', true);
        $('.pelaaja2 > .punainen').prop('disabled', true);
          if(this.state.keltainen === 0){
            $('.pelaaja1 > .keltainen').prop('disabled', true);
            $('.pelaaja2 > .keltainen').prop('disabled', true);
          }
          if(this.state.vihrea === 0){
            $('.pelaaja1 > .vihrea').prop('disabled', true);
            $('.pelaaja2 > .vihrea').prop('disabled', true);
          }
          if(this.state.ruskea === 0){
            $('.pelaaja1 > .ruskea').prop('disabled', true);
            $('.pelaaja2 > .ruskea').prop('disabled', true);
          }
          if(this.state.sininen === 0){
            $('.pelaaja1 > .sininen').prop('disabled', true);
            $('.pelaaja2 > .sininen').prop('disabled', true);
          }
          if(this.state.pinkki === 0){
            $('.pelaaja1 > .pinkki').prop('disabled', true);
            $('.pelaaja2 > .pinkki').prop('disabled', true);
          }
        }
        this.writeToDemo("Pelaajan 2 vuoro.");
        this.setState({ pelaaja: this.state.pelaaja + 1 })
        this.setState({ lippu: 0 })
      //this.writeToDemo("Pelaajan " + this.state.pelaaja + " vuoro");
    } else {
      this.setState({nykyisen_pelaaja_nimi: this.state.p1_nimi});
      $(".pelaaja1").css("background-color", "#666666");
      $(".pelaaja2").css("background-color", "");
      $('.pelaaja1 > .button').prop('disabled', false);
      $('.pelaaja2 > .button').prop('disabled', true);
      
      if(this.state.punaisia === 0 ){
        $('.pelaaja1 > .punainen').prop('disabled', true);
        $('.pelaaja2 > .punainen').prop('disabled', true);
        if(this.state.punaisia === 0 ){
          $('.pelaaja1 > .punainen').prop('disabled', true);
          $('.pelaaja2 > .punainen').prop('disabled', true);
          if(this.state.keltainen === 0){
            $('.pelaaja1 > .keltainen').prop('disabled', true);
            $('.pelaaja2 > .keltainen').prop('disabled', true);
          }
          if(this.state.vihrea === 0){
            $('.pelaaja1 > .vihrea').prop('disabled', true);
            $('.pelaaja2 > .vihrea').prop('disabled', true);
          }
          if(this.state.ruskea === 0){
            $('.pelaaja1 > .ruskea').prop('disabled', true);
            $('.pelaaja2 > .ruskea').prop('disabled', true);
          }
          if(this.state.sininen === 0){
            $('.pelaaja1 > .sininen').prop('disabled', true);
            $('.pelaaja2 > .sininen').prop('disabled', true);
          }
          if(this.state.pinkki === 0){
            $('.pelaaja1 > .pinkki').prop('disabled', true);
            $('.pelaaja2 > .pinkki').prop('disabled', true);
          }
        }
      }
      this.writeToDemo("Pelaajan 1 vuoro.");
      this.setState({ pelaaja: this.state.pelaaja - 1 })
      this.setState({ lippu: 0 })
      //this.writeToDemo("Pelaajan " + this.state.pelaaja + " vuoro");
    }
  }

  Alustus() {
    this.lisaaNimet();
    for (var i = 0; i < this.state.elems.length; i++) {
      this.state.elems[i].disabled = false;
    }

    $('#demo').empty();

    this.setState({
      pelaaja: 1,
      p1_break_piste: 0,
      p2_break_piste: 0,
      p1_frame_piste: 0,
      p2_frame_piste: 0,
      lippu: 0,
      p1_max_piste: 147,
      p2_max_piste: 147,
      punaisia: 15,
      keltainen: 1,
      vihrea: 1,
      ruskea: 1,
      sininen: 1,
      pinkki: 1,
      musta: 1,
      vpisteet: 0,
      elems: document.getElementsByClassName("btn" /*btn*/),
      vapaapallo: 0,
      
      
    });
    //this.writeToDemo("PELI ALKAA! Pelaaja 1 aloittaa!");
    //document.getElementById("maxScore").innerHTML = "Aktiivisen pelaajan mahdollinen maksimipistemäärä: " + this.state.p1_max_piste;
    //document.getElementById("punaisiaJaljella").innerHTML = "punaisia jäljellä: " + this.state.punaisia;
    $('.pelaaja1 > .button').prop('disabled', false);
    $('.pelaaja2 > .button').prop('disabled', true);
    $(".pelaaja1").css("background-color", "#666666");
    $(".pelaaja2").css("background-color", "");
    document.getElementById("demo").setAttribute("style","overflow:auto;height:200px;width:1110px");
    console.log("Alustettu / Uusi peli ")
  }

  PPallo() { // Punaisen pallon pisteytys
    
    if (this.state.lippu === 0 || this.state.lippu === 1) { // Jos kaikki punaiset pussitettu, disabloidaan painike
      if (this.state.punaisia === 0) {
        document.getElementById("PPallo").disabled = true;
      }
      else {
        this.setState({ punaisia: this.state.punaisia - 1 })
      }
      //document.getElementById("punaisiaJaljella").innerHTML = "Punaisia jäljellä: " + this.state.punaisia;
      if (this.state.pelaaja === 1) {
        this.setState({ p1_break_piste: this.state.p1_break_piste + 1 })
        this.setState({ p1_frame_piste: this.state.p1_frame_piste + 1 })
        //this.setState({ p1_max_piste: this.state.p1_frame_piste + (8 * this.state.punaisia + 27/*34*/) })
        this.maxPisteet(1);
        this.writeToDemo("Pelaaja " + this.state.nykyisen_pelaaja_nimi + " pussitti punaisen. ");
        if(this.state.punaisia === 0 ){
          $('.pelaaja1 > .punainen').prop('disabled', true);
          $('.pelaaja2 > .punainen').prop('disabled', true);
        }
        //document.getElementById("maxScore").innerHTML = "Aktiivisen pelaajan mahdollinen maksimipistemäärä: " + this.state.p1_max_piste;
      }
      else {
        this.setState({ p2_break_piste: this.state.p2_break_piste + 1 })
        this.setState({ p2_frame_piste: this.state.p2_frame_piste + 1 })
        //this.setState({ p2_max_piste: this.state.p2_frame_piste + (8 * this.state.punaisia + 27 /*34*/) })
        this.maxPisteet(1);
        this.writeToDemo("Pelaaja " + this.state.nykyisen_pelaaja_nimi + " pussitti punaisen. ");
        if(this.state.punaisia === 0 ){
          $('.pelaaja1 > .punainen').prop('disabled', true);
          $('.pelaaja2 > .punainen').prop('disabled', true);
        }
        //document.getElementById("maxScore").innerHTML = "Aktiivisen pelaajan mahdollinen maksimipistemäärä: " + this.state.p2_max_piste;

      }
      this.setState({ lippu: 1 })      
      if(this.state.punaisia === 1){
        $('.pelaaja1 > .punainen').prop('disabled', true);
        $('.pelaaja2 > .punainen').prop('disabled', true);
      }
    } else {
      this.setState({ punaisia: this.state.punaisia - 1 })
      //this.Virhe(4);    
  }
}

  Kelt() {
    if(this.state.punaisia === 0 ){
      $('.pelaaja2 > .punainen').prop('disabled', true);
      $('.pelaaja1 > .punainen').prop('disabled', true);
    }
    console.log("keltainen painettu")
    if (this.state.punaisia === 0 && this.state.lippu === 0 && this.state.vpisteet === 0) {
      if (this.state.pelaaja === 1) {
        this.setState({ p1_break_piste: this.state.p1_break_piste + 2 })
        this.setState({ p1_frame_piste: this.state.p1_frame_piste + 2 })
        //this.setState({ p1_max_piste: this.state.p1_frame_piste + (8 * this.state.punaisia + 25) })
        this.maxPisteet(2);
        this.writeToDemo("Pelaaja " + this.state.nykyisen_pelaaja_nimi + " pussitti keltaisen. ");
        //document.getElementById("maxScore").innerHTML = "Aktiivisen pelaajan mahdollinen maksimipistemäärä: " + this.state.p1_max_piste;

      }
      else {
        this.setState({ p2_break_piste: this.state.p2_break_piste + 2 })
        this.setState({ p2_frame_piste: this.state.p2_frame_piste + 2 })
        //this.setState({ p2_max_piste: this.state.p2_frame_piste + (8 * this.state.punaisia + 25) })
        this.maxPisteet(2);
        this.writeToDemo("Pelaaja " + this.state.nykyisen_pelaaja_nimi + " pussitti keltaisen. ");
        //document.getElementById("maxScore").innerHTML = "Aktiivisen pelaajan mahdollinen maksimipistemäärä: " + this.state.p2_max_piste;

      }
      this.setState({ vpisteet: this.state.vpisteet + 2 })
      //document.getElementById("Kelt").disabled = true;
      this.setState({ keltainen: 0})
      $('.pelaaja1 > .keltainen').prop('disabled', true);
      $('.pelaaja2 > .keltainen').prop('disabled', true);
    }
    else {
      if (this.state.lippu === 1) {
        if (this.state.pelaaja === 1) {
          this.setState({ p1_break_piste: this.state.p1_break_piste + 2 })
          this.setState({ p1_frame_piste: this.state.p1_frame_piste + 2 })
          //this.setState({ p1_max_piste: this.state.p1_frame_piste + (8 * this.state.punaisia + 27 ) })
          this.maxPisteet(2);
          this.writeToDemo("Pelaaja " + this.state.nykyisen_pelaaja_nimi + " pussitti keltaisen. ");
          //document.getElementById("maxScore").innerHTML = "Aktiivisen pelaajan mahdollinen maksimipistemäärä: " + this.state.p1_max_piste;

        }
        else {
          this.setState({ p2_break_piste: this.state.p2_break_piste + 2 })
          this.setState({ p2_frame_piste: this.state.p2_frame_piste + 2 })
          //this.setState({ p2_max_piste: this.state.p2_frame_piste + (8 * this.state.punaisia + 27) })
          this.maxPisteet(2);
          this.writeToDemo("Pelaaja " + this.state.nykyisen_pelaaja_nimi + " pussitti keltaisen. ");
          //document.getElementById("maxScore").innerHTML = "Aktiivisen pelaajan mahdollinen maksimipistemäärä: " + this.state.p2_max_piste;

        }
        this.setState({ lippu: 0 })
      }
      else {
        this.Virhe(4);
      }
    }
  }

  Vihr() {
    if(this.state.punaisia === 0 ){
      $('.pelaaja2 > .punainen').prop('disabled', true);
      $('.pelaaja1 > .punainen').prop('disabled', true);
    }
    console.log("Vihreä painettu")
    if (this.state.punaisia === 0 && this.state.lippu === 0 && this.state.vpisteet === 2) {
      if (this.state.pelaaja === 1) {
        this.setState({ p1_break_piste: this.state.p1_break_piste + 3 })
        this.setState({ p1_frame_piste: this.state.p1_frame_piste + 3 })
        //this.setState({ p1_max_piste: this.state.p1_frame_piste + (8 * this.state.punaisia + 22) })
        this.maxPisteet(3);
        this.writeToDemo("Pelaaja " + this.state.nykyisen_pelaaja_nimi + " pussitti vihreän. ");
        //document.getElementById("maxScore").innerHTML = "Aktiivisen pelaajan mahdollinen maksimipistemäärä: " + this.state.p1_max_piste;
      }
      else {
        this.setState({ p2_break_piste: this.state.p2_break_piste + 3 })
        this.setState({ p2_frame_piste: this.state.p2_frame_piste + 3 })
        //this.setState({ p2_max_piste: this.state.p2_frame_piste + (8 * this.state.punaisia + 22) })
        this.maxPisteet(3);
        this.writeToDemo("Pelaaja " + this.state.nykyisen_pelaaja_nimi + " pussitti vihreän.");
        //document.getElementById("maxScore").innerHTML = "Aktiivisen pelaajan mahdollinen maksimipistemäärä: " + this.state.p2_max_piste;

      }
      //document.getElementById("Vihr").disabled = true;
      this.setState({ vihrea: 0})
      $('.pelaaja1 > .vihrea').prop('disabled', true);
      $('.pelaaja2 > .vihrea').prop('disabled', true);
      this.setState({ vpisteet: this.state.vpisteet + 3 })
    }
    else {
      if (this.state.lippu === 1) {
        if (this.state.pelaaja === 1) {
          this.setState({ p1_break_piste: this.state.p1_break_piste + 3 })
          this.setState({ p1_frame_piste: this.state.p1_frame_piste + 3 })
          //this.setState({ p1_max_piste: this.state.p1_frame_piste + (8 * this.state.punaisia + 27) })
          this.maxPisteet(3);
          this.writeToDemo("Pelaaja " + this.state.nykyisen_pelaaja_nimi + " pussitti vihreän.");
          //document.getElementById("maxScore").innerHTML = "Aktiivisen pelaajan mahdollinen maksimipistemäärä: " + this.state.p1_max_piste;
        }
        else {
          this.setState({ p2_break_piste: this.state.p2_break_piste + 3 })
          this.setState({ p2_frame_piste: this.state.p2_frame_piste + 3 })
          //this.setState({ p2_max_piste: this.state.p2_frame_piste + (8 * this.state.punaisia + 27) })
          this.maxPisteet(3);
          this.writeToDemo("Pelaaja " + this.state.nykyisen_pelaaja_nimi + " pussitti vihreän.");
          //document.getElementById("maxScore").innerHTML = "Aktiivisen pelaajan mahdollinen maksimipistemäärä: " + this.state.p2_max_piste;

        }
        this.setState({ lippu: 0 })
      }
      else {
        this.Virhe(4);
      }
    }
  }

  Rusk() {
    if(this.state.punaisia === 0 ){
      $('.pelaaja2 > .punainen').prop('disabled', true);
      $('.pelaaja1 > .punainen').prop('disabled', true);
    }
    if (this.state.punaisia === 0 && this.state.lippu === 0 && this.state.vpisteet === 5) {
      if (this.state.pelaaja === 1) {
        this.setState({ p1_break_piste: this.state.p1_break_piste + 4 })
        this.setState({ p1_frame_piste: this.state.p1_frame_piste + 4 })
        //this.setState({ p1_max_piste: this.state.p1_frame_piste + (8 * this.state.punaisia + 18) })
        this.maxPisteet(4);
        this.writeToDemo("Pelaaja " + this.state.nykyisen_pelaaja_nimi + " pussitti ruskean.");
        //document.getElementById("maxScore").innerHTML = "Aktiivisen pelaajan mahdollinen maksimipistemäärä: " + this.state.p1_max_piste;

      }
      else {
        this.setState({ p2_break_piste: this.state.p2_break_piste + 4 })
        this.setState({ p2_frame_piste: this.state.p2_frame_piste + 4 })
        //this.setState({ p2_max_piste: this.state.p2_frame_piste + (8 * this.state.punaisia + 18) })
        this.maxPisteet(4);
        this.writeToDemo("Pelaaja " + this.state.nykyisen_pelaaja_nimi + " pussitti ruskean.");
        //document.getElementById("maxScore").innerHTML = "Aktiivisen pelaajan mahdollinen maksimipistemäärä: " + this.state.p2_max_piste;

      }
      //document.getElementById("Rusk").disabled = true;
      this.setState({ ruskea: 0})
      $('.pelaaja1 > .ruskea').prop('disabled', true);
      $('.pelaaja2 > .ruskea').prop('disabled', true);
      this.setState({ vpisteet: this.state.vpisteet + 4 })
    }
    else {
      if (this.state.lippu === 1) {
        if (this.state.pelaaja === 1) {
          this.setState({ p1_break_piste: this.state.p1_break_piste + 4 })
          this.setState({ p1_frame_piste: this.state.p1_frame_piste + 4 })
          //this.setState({ p1_max_piste: this.state.p1_frame_piste + (8 * this.state.punaisia + 27) })
          this.maxPisteet(4);
          this.writeToDemo("Pelaaja " + this.state.nykyisen_pelaaja_nimi + " pussitti ruskean.");
          //document.getElementById("maxScore").innerHTML = "Aktiivisen pelaajan mahdollinen maksimipistemäärä: " + this.state.p1_max_piste;

        }
        else {
          this.setState({ p2_break_piste: this.state.p2_break_piste + 4 })
          this.setState({ p2_frame_piste: this.state.p2_frame_piste + 4 })
          //this.setState({ p2_max_piste: this.state.p2_frame_piste + (8 * this.state.punaisia + 27) })
          this.maxPisteet(4);
          this.writeToDemo("Pelaaja " + this.state.nykyisen_pelaaja_nimi + " pussitti ruskean.");
          //document.getElementById("maxScore").innerHTML = "Aktiivisen pelaajan mahdollinen maksimipistemäärä: " + this.state.p2_max_piste;

        }
        this.setState({ lippu: 0 })
      }
      else {
        this.Virhe(4);
      }
    }
  }

  Sini() {
    if(this.state.punaisia === 0 ){
      $('.pelaaja2 > .punainen').prop('disabled', true);
      $('.pelaaja1 > .punainen').prop('disabled', true);
    }
    if (this.state.punaisia === 0 && this.state.lippu === 0 && this.state.vpisteet === 9) {
      if (this.state.pelaaja === 1) {
        this.setState({ p1_break_piste: this.state.p1_break_piste + 5 })
        this.setState({ p1_frame_piste: this.state.p1_frame_piste + 5 })
        //this.setState({ p1_max_piste: this.state.p1_frame_piste + (8 * this.state.punaisia + 13) })
        this.maxPisteet(5);
        this.writeToDemo("Pelaaja " + this.state.nykyisen_pelaaja_nimi + " pussitti sinisen.");
        //document.getElementById("maxScore").innerHTML = "Aktiivisen pelaajan mahdollinen maksimipistemäärä: " + this.state.p1_max_piste;

      }
      else {
        this.setState({ p2_break_piste: this.state.p2_break_piste + 5 })
        this.setState({ p2_frame_piste: this.state.p2_frame_piste + 5 })
        //this.setState({ p2_max_piste: this.state.p2_frame_piste + (8 * this.state.punaisia + 13) })
        this.maxPisteet(5);
        this.writeToDemo("Pelaaja " + this.state.nykyisen_pelaaja_nimi + " pussitti sinisen.");
        //document.getElementById("maxScore").innerHTML = "Aktiivisen pelaajan mahdollinen maksimipistemäärä: " + this.state.p2_max_piste;

      }
      //document.getElementById("Sini").disabled = true;
      this.setState({ sininen: 0})
      $('.pelaaja1 > .sininen').prop('disabled', true);
      $('.pelaaja2 > .sininen').prop('disabled', true);
      this.setState({ vpisteet: this.state.vpisteet + 5 })
    }
    else {
      if (this.state.lippu === 1) {
        if (this.state.pelaaja === 1) {
          this.setState({ p1_break_piste: this.state.p1_break_piste + 5 })
          this.setState({ p1_frame_piste: this.state.p1_frame_piste + 5 })
          //this.setState({ p1_max_piste: this.state.p1_frame_piste + (8 * this.state.punaisia + 27) })
          this.maxPisteet(5);
          this.writeToDemo("Pelaaja " + this.state.nykyisen_pelaaja_nimi + " pussitti sinisen.");
          //document.getElementById("maxScore").innerHTML = "Aktiivisen pelaajan mahdollinen maksimipistemäärä: " + this.state.p1_max_piste;

        }
        else {
          this.setState({ p2_break_piste: this.state.p2_break_piste + 5 })
          this.setState({ p2_frame_piste: this.state.p2_frame_piste + 5 })
          //this.setState({ p2_max_piste: this.state.p2_frame_piste + (8 * this.state.punaisia + 27) })
          this.maxPisteet(5);
          this.writeToDemo("Pelaaja " + this.state.nykyisen_pelaaja_nimi + " pussitti sinisen.");
          //document.getElementById("maxScore").innerHTML = "Aktiivisen pelaajan mahdollinen maksimipistemäärä: " + this.state.p2_max_piste;

        }
        this.setState({ lippu: 0 })
      }
      else {
        this.Virhe(5);
      }
    }
  }

  Vaal() {
        if(this.state.punaisia === 0 ){
      $('.pelaaja2 > .punainen').prop('disabled', true);
      $('.pelaaja1 > .punainen').prop('disabled', true);
    }
    if (this.state.punaisia === 0 && this.state.lippu === 0 && this.state.vpisteet === 14) {
      if (this.state.pelaaja === 1) {
        this.setState({ p1_break_piste: this.state.p1_break_piste + 6 })
        this.setState({ p1_frame_piste: this.state.p1_frame_piste + 6 })
        //this.setState({ p1_max_piste: this.state.p1_frame_piste + (8 * this.state.punaisia + 7) })
        this.maxPisteet(6);
        this.writeToDemo("Pelaaja " + this.state.nykyisen_pelaaja_nimi + " pussitti vaaleanpunaisen.");
        //document.getElementById("maxScore").innerHTML = "Aktiivisen pelaajan mahdollinen maksimipistemäärä: " + this.state.p1_max_piste;
      }
      else {
        this.setState({ p2_break_piste: this.state.p2_break_piste + 6 })
        this.setState({ p2_frame_piste: this.state.p2_frame_piste + 6 })
        //this.setState({ p2_max_piste: this.state.p2_frame_piste + (8 * this.state.punaisia + 7) })
        this.maxPisteet(6);
        this.writeToDemo("Pelaaja " + this.state.nykyisen_pelaaja_nimi + " pussitti vaaleanpunaisen.");
        //document.getElementById("maxScore").innerHTML = "Aktiivisen pelaajan mahdollinen maksimipistemäärä: " + this.state.p2_max_piste;

      }
      //document.getElementById("Vaal").disabled = true;
      this.setState({ pinkki: 0})
        $('.pelaaja1 > .pinkki').prop('disabled', true);
        $('.pelaaja2 > .pinkki').prop('disabled', true);
      
      this.setState({ vpisteet: this.state.vpisteet + 6 })
    }
    else {
      if (this.state.lippu === 1) {
        if (this.state.pelaaja === 1) {
          this.setState({ p1_break_piste: this.state.p1_break_piste + 6 })
          this.setState({ p1_frame_piste: this.state.p1_frame_piste + 6 })
          //this.setState({ p1_max_piste: this.state.p1_frame_piste + (8 * this.state.punaisia + 27) })
          this.maxPisteet(6);
          this.writeToDemo("Pelaaja " + this.state.nykyisen_pelaaja_nimi + " pussitti vaaleanpunaisen.");
          //document.getElementById("maxScore").innerHTML = "Aktiivisen pelaajan mahdollinen maksimipistemäärä: " + this.state.p1_max_piste;

        }
        else {
          this.setState({ p2_break_piste: this.state.p2_break_piste + 6 })
          this.setState({ p2_frame_piste: this.state.p2_frame_piste + 6 })
          //this.setState({ p2_max_piste: this.state.p2_frame_piste + (8 * this.state.punaisia + 27) })
          this.maxPisteet(6);
          this.writeToDemo("Pelaaja " + this.state.nykyisen_pelaaja_nimi + " pussitti vaaleanpunaisen.");
          //document.getElementById("maxScore").innerHTML = "Aktiivisen pelaajan mahdollinen maksimipistemäärä: " + this.state.p2_max_piste;

        }
        this.setState({ lippu: 0 })
      }
      else {
        this.Virhe(6);
      }
    }
  }

  Must() {
    if(this.state.punaisia === 0 ){
      $('.pelaaja2 > .punainen').prop('disabled', true);
      $('.pelaaja1 > .punainen').prop('disabled', true);
    }
    if (this.state.punaisia === 0 && this.state.lippu === 0 && this.state.vpisteet === 20) {
      if (this.state.pelaaja === 1) {
        this.setState({ p1_break_piste: this.state.p1_break_piste + 7 })
        this.setState({ p1_frame_piste: this.state.p1_frame_piste + 7 })
        //this.setState({ p1_max_piste: this.state.p1_frame_piste + (8 * this.state.punaisia + 0) })
        this.maxPisteet(7);
        this.writeToDemo("Pelaaja " + this.state.nykyisen_pelaaja_nimi + " pussitti mustan.");
        //document.getElementById("maxScore").innerHTML = "Aktiivisen pelaajan mahdollinen maksimipistemäärä: " + this.state.p1_max_piste;

        if (this.state.p1_frame_piste+7 === this.state.p2_frame_piste){
          this.UusintaMusta();
        }
          
        
        else  {
          alert(Boolean(this.state.p1_frame_piste > this.state.p2_frame_piste) ? "Kaikki pallot pussitettu! Pelaaja 1 voitti. Aloita uusi peli" : "Kaikki pallot pussitettu! Pelaaja 2 voitti. Aloita uusi peli");
        }
      }
      else {
        this.setState({ p2_break_piste: this.state.p2_break_piste + 7 })
        this.setState({ p2_frame_piste: this.state.p2_frame_piste + 7 })
        //this.setState({ p2_max_piste: this.state.p2_frame_piste + (8 * this.state.punaisia + 0) })
        this.maxPisteet(7);
        this.writeToDemo("Pelaaja " + this.state.nykyisen_pelaaja_nimi + " pussitti mustan");
        //document.getElementById("maxScore").innerHTML = "Aktiivisen pelaajan mahdollinen maksimipistemäärä: " + this.state.p2_max_piste;

        if (this.state.p1_frame_piste === this.state.p2_frame_piste+7){
          this.UusintaMusta();
        }
          
        
        else  {
          alert(Boolean(this.state.p1_frame_piste > this.state.p2_frame_piste) ? "Kaikki pallot pussitettu! Pelaaja 1 voitti. Aloita uusi peli" : "Kaikki pallot pussitettu! Pelaaja 2 voitti. Aloita uusi peli");
        }
      }
      for (var i = 0; i < this.state.elems.length; i++) {
        this.state.elems[i].disabled = true;
      }
    }
    else {
      if (this.state.lippu === 1) {
        if (this.state.pelaaja === 1) {
          this.setState({ p1_break_piste: this.state.p1_break_piste + 7 })
          this.setState({ p1_frame_piste: this.state.p1_frame_piste + 7 })
          //this.setState({ p1_max_piste: this.state.p1_frame_piste + (8 * this.state.punaisia + 34/*27 */) })
          this.maxPisteet(7);
          this.writeToDemo("Pelaaja " + this.state.nykyisen_pelaaja_nimi + " pussitti mustan.");

          //document.getElementById("maxScore").innerHTML = "Aktiivisen pelaajan mahdollinen maksimipistemäärä: " + this.state.p1_max_piste;

        }
        else {
          this.setState({ p2_break_piste: this.state.p2_break_piste + 7 })
          this.setState({ p2_frame_piste: this.state.p2_frame_piste + 7 })
          //this.setState({ p2_max_piste: this.state.p2_frame_piste + (8 * this.state.punaisia + 34/*27*/) })
          this.maxPisteet(7);
          this.writeToDemo("Pelaaja " + this.state.nykyisen_pelaaja_nimi + " pussitti mustan.");

          //document.getElementById("maxScore").innerHTML = "Aktiivisen pelaajan mahdollinen maksimipistemäärä: " + this.state.p2_max_piste;
        }
        this.setState({ lippu: 0 })
      }
      else {
        this.Virhe(7);
      }
    }
  }

  Luovutus() {
    if (window.confirm(Boolean(this.state.p1_frame_piste > this.state.p2_frame_piste) ? "Oletko varma, että pelaaja 2 luovuttaa erän?" : "Oletko varma, että pelaaja 1 luovuttaa erän?")) {
      if (this.state.p1_frame_piste > this.state.p2_frame_piste) {
        this.writeToDemo(this.state.p2_nimi + " luovuttaa. " +this.state.p1_nimi+ " voitti erän!");
      }
      else {
        this.writeToDemo(this.state.p1_nimi + " luovuttaa. " +this.state.p2_nimi+ " voitti erän!");
      }
      for (var i = 0; i < this.state.elems.length; i++) {
        this.state.elems[i].disabled = true;
      }
    }
  }

  Virhe(virhepiste) {
    if(this.state.pelaaja === 1){
      //console.log("vuoronvaihto")
      this.setState({nykyisen_pelaaja_nimi: this.state.p2_nimi});
      $(".pelaaja2").css("background-color", "#666666");
      $(".pelaaja1").css("background-color", "");
    }
    else{
      this.setState({nykyisen_pelaaja_nimi: this.state.p1_nimi});
      $(".pelaaja1").css("background-color", "#666666");
      $(".pelaaja2").css("background-color", "");
    }
    if (this.state.pelaaja === 1) {
      $('.pelaaja2 > .button').prop('disabled', false);
      $('.pelaaja1 > .button').prop('disabled', true);
      if(this.state.punaisia === 0 ){
        $('.pelaaja1 > .punainen').prop('disabled', true);
        $('.pelaaja2 > .punainen').prop('disabled', true);
          if(this.state.keltainen === 0){
            $('.pelaaja1 > .keltainen').prop('disabled', true);
            $('.pelaaja2 > .keltainen').prop('disabled', true);
          }
          if(this.state.vihrea === 0){
            $('.pelaaja1 > .vihrea').prop('disabled', true);
            $('.pelaaja2 > .vihrea').prop('disabled', true);
          }
          if(this.state.ruskea === 0){
            $('.pelaaja1 > .ruskea').prop('disabled', true);
            $('.pelaaja2 > .ruskea').prop('disabled', true);
          }
          if(this.state.sininen === 0){
            $('.pelaaja1 > .sininen').prop('disabled', true);
            $('.pelaaja2 > .sininen').prop('disabled', true);
          }
          if(this.state.pinkki === 0){
            $('.pelaaja1 > .pinkki').prop('disabled', true);
            $('.pelaaja2 > .pinkki').prop('disabled', true);
          }
        }

      this.writeToDemo("VIRHE, pelaajan " + this.state.pelaaja + " vuoro loppuu. Break pisteet: " + this.state.p1_break_piste);
      this.setState({p2_frame_piste : this.state.p2_frame_piste + virhepiste})
      this.writeToDemo("Pelaajan 2 vuoro.");
      this.setState({ pelaaja: 2 })
      this.setState({ lippu: 0 })
      this.setState({ p1_break_piste: 0 })

    }
    else {

      $('.pelaaja1 > .button').prop('disabled', false);
      $('.pelaaja2 > .button').prop('disabled', true);
      if(this.state.punaisia === 0 ){
        $('.pelaaja1 > .punainen').prop('disabled', true);
        $('.pelaaja2 > .punainen').prop('disabled', true);
          if(this.state.keltainen === 0){
            $('.pelaaja1 > .keltainen').prop('disabled', true);
            $('.pelaaja2 > .keltainen').prop('disabled', true);
          }
          if(this.state.vihrea === 0){
            $('.pelaaja1 > .vihrea').prop('disabled', true);
            $('.pelaaja2 > .vihrea').prop('disabled', true);
          }
          if(this.state.ruskea === 0){
            $('.pelaaja1 > .ruskea').prop('disabled', true);
            $('.pelaaja2 > .ruskea').prop('disabled', true);
          }
          if(this.state.sininen === 0){
            $('.pelaaja1 > .sininen').prop('disabled', true);
            $('.pelaaja2 > .sininen').prop('disabled', true);
          }
          if(this.state.pinkki === 0){
            $('.pelaaja1 > .pinkki').prop('disabled', true);
            $('.pelaaja2 > .pinkki').prop('disabled', true);
          }
        }
      this.writeToDemo("VIRHE, pelaajan " + this.state.pelaaja + " vuoro loppuu. Break pisteet: " + this.state.p2_break_piste);
      console.log("Vapaapallo piste " + this.state.vapaapallo);
      this.setState({p1_frame_piste : this.state.p1_frame_piste + virhepiste });
      this.writeToDemo(" Pelaajan 1 vuoro.");
      this.setState({ pelaaja: 1 });
      this.setState({ lippu: 0 });
      this.setState({ p2_break_piste: 0 });

    }
  }
  Vapaapallo(virhepiste, vapaapallo) {
    if(this.state.pelaaja === 1){
      //console.log("vuoronvaihto")
      $(".pelaaja2").css("background-color", "#666666");
      $(".pelaaja1").css("background-color", "");
    }
    else{
      $(".pelaaja1").css("background-color", "#666666");
      $(".pelaaja2").css("background-color", "");
    }
    if (this.state.pelaaja === 1) {
      $('.pelaaja2 > .button').prop('disabled', false);
      $('.pelaaja1 > .button').prop('disabled', true);
      if(this.state.punaisia === 0 ){
        $('.pelaaja1 > .punainen').prop('disabled', true);
        $('.pelaaja2 > .punainen').prop('disabled', true);
          if(this.state.keltainen === 0){
            $('.pelaaja1 > .keltainen').prop('disabled', true);
            $('.pelaaja2 > .keltainen').prop('disabled', true);
          }
          if(this.state.vihrea === 0){
            $('.pelaaja1 > .vihrea').prop('disabled', true);
            $('.pelaaja2 > .vihrea').prop('disabled', true);
          }
          if(this.state.ruskea === 0){
            $('.pelaaja1 > .ruskea').prop('disabled', true);
            $('.pelaaja2 > .ruskea').prop('disabled', true);
          }
          if(this.state.sininen === 0){
            $('.pelaaja1 > .sininen').prop('disabled', true);
            $('.pelaaja2 > .sininen').prop('disabled', true);
          }
          if(this.state.pinkki === 0){
            $('.pelaaja1 > .pinkki').prop('disabled', true);
            $('.pelaaja2 > .pinkki').prop('disabled', true);
          }
        }

      this.writeToDemo("VIRHE, "+ virhepiste + " pistettä." +" Pelaajan " + this.state.pelaaja + " vuoro loppuu. Break pisteet: " + this.state.p1_break_piste);
      this.writeToDemo("VAPAAPALLO, pelaaja " + this.state.pelaaja + " saa vapaapallosta pisteitä: " + this.state.vapaapallo);
      this.setState({p2_frame_piste : this.state.p2_frame_piste + virhepiste + vapaapallo})
      this.writeToDemo("Pelaajan 2 vuoro.");
      this.setState({ pelaaja: 2 })
      if(vapaapallo===1){
        this.setState({ lippu: 1 });
      }
      else if (this.state.punaisia === 0){
        this.setState({ lippu: 1 });
      }
      else {
        this.setState({ lippu: 0 });
      }
      this.setState({ p1_break_piste: 0 })
      this.setState({show: !this.state.show})
    }
    else {

      $('.pelaaja1 > .button').prop('disabled', false);
      $('.pelaaja2 > .button').prop('disabled', true);
      if(this.state.punaisia === 0 ){
        $('.pelaaja1 > .punainen').prop('disabled', true);
        $('.pelaaja2 > .punainen').prop('disabled', true);
          if(this.state.keltainen === 0){
            $('.pelaaja1 > .keltainen').prop('disabled', true);
            $('.pelaaja2 > .keltainen').prop('disabled', true);
          }
          if(this.state.vihrea === 0){
            $('.pelaaja1 > .vihrea').prop('disabled', true);
            $('.pelaaja2 > .vihrea').prop('disabled', true);
          }
          if(this.state.ruskea === 0){
            $('.pelaaja1 > .ruskea').prop('disabled', true);
            $('.pelaaja2 > .ruskea').prop('disabled', true);
          }
          if(this.state.sininen === 0){
            $('.pelaaja1 > .sininen').prop('disabled', true);
            $('.pelaaja2 > .sininen').prop('disabled', true);
          }
          if(this.state.pinkki === 0){
            $('.pelaaja1 > .pinkki').prop('disabled', true);
            $('.pelaaja2 > .pinkki').prop('disabled', true);
          }
        }
      this.writeToDemo("VIRHE, "+ virhepiste + " pistettä." +" Pelaajan " + this.state.pelaaja + " vuoro loppuu. Break pisteet: " + this.state.p1_break_piste);
      this.writeToDemo("VAPAAPALLO, pelaaja " + this.state.pelaaja + " saa vapaapallosta pisteitä: " + this.state.vapaapallo);
      this.setState({p1_frame_piste : this.state.p1_frame_piste + virhepiste + vapaapallo});
      this.writeToDemo(" Pelaajan 1 vuoro.");
      this.setState({ pelaaja: 1 });
      if(vapaapallo===1){
        this.setState({ lippu: 1 });
      }
      else if (this.state.punaisia === 0){
        this.setState({ lippu: 1 });
      }
      else {
        this.setState({ lippu: 0 });
      }
      this.setState({ p2_break_piste: 0 });
      this.setState({show: !this.state.show})
    }
  }
  writeToDemo(message) {
    $('#demo').prepend('<p>' + message + '</p>');
  }
  virheNelja(){
    this.Virhe(4);
  }
  virheViisi(){
    this.Virhe(5);
  }
  virheKuusi(){
    this.Virhe(6);
  }
  virheSeitseman(){
    this.Virhe(7);
  }
  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  }
  setVirhepiste=(virhepiste)=>{
    this.state.vp_virhepiste=virhepiste;
  }
  setVapaapallo(vapaapallopiste) {
    this.state.vapaapallo=vapaapallopiste;
    //console.log("Vapaapallo piste " + this.state.vapaapallo);
    this.Vapaapallo(this.state.vp_virhepiste, this.state.vapaapallo);
  }

  lisaaNimet() {
    var p1_nimi = prompt("Lisää pelaajan 1 nimi", "");
    var p2_nimi = prompt("Lisää pelaajan 2 nimi", "");
    if (p1_nimi != null && p2_nimi != null) {
      this.setState({ p1_nimi: p1_nimi, nykyisen_pelaaja_nimi: p1_nimi }, () => {
        this.writeToDemo("PELI ALKAA! "+ p1_nimi + " aloittaa!");
      }); 
      this.setState({ p2_nimi: p2_nimi }, () => {
      }); 
    }
  }

  nimicheck() {
    var nimen_state = this.state.pelaaja;
    if (nimen_state === 1){
      return this.state.p1_nimi
    }
    else {
      return this.state.p2_nimi
    }
  }

  maxPisteet(piste){
    if(piste === 1){
      //this.setState({ max_piste: this.state.max_piste - piste});
      this.setState({ p1_max_piste: this.state.p1_max_piste - piste })
      this.setState({ p2_max_piste: this.state.p2_max_piste - piste })
    }
    else if(piste > 1 && this.state.punaisia === 0 && this.state.lippu === 0){
      //this.setState({ max_piste: this.state.max_piste - 8});
      this.setState({ p1_max_piste: this.state.p1_max_piste - piste })
      this.setState({ p2_max_piste: this.state.p2_max_piste - piste })
    }
    else {
      //this.setState({ max_piste: this.state.max_piste - piste});
      this.setState({ p1_max_piste: this.state.p1_max_piste - 7 })
      this.setState({ p2_max_piste: this.state.p2_max_piste - 7 })
    }
  }
  //Punaisten säätäminen
  changeSelectedName = e => {
    if(e.target.value > 15){
      this.setState ({punaisia: 15})
    }
    else if (e.target.value <= 0){
      $('.pelaaja1 > .punainen').prop('disabled', true);
      $('.pelaaja2 > .punainen').prop('disabled', true);
      this.setState({punaisia: 0})
    }
    else{
      $('.pelaaja1 > .punainen').prop('disabled', false);
      $('.pelaaja2 > .punainen').prop('disabled', false);
      this.setState({punaisia: e.target.value})
    }
  };

  UusintaMusta() {
    if(
      this.p1_break_piste === this.p2_break_piste &&
      document.getElementById("PPallo").disabled &&
      document.getElementById("Kelt").disabled &&
      document.getElementById("Vihr").disabled &&
      document.getElementById("Rusk").disabled &&
      document.getElementById("Sini").disabled &&
      document.getElementById("Vaal").disabled
      
      ) {
        alert("Pelataan uusimusta")
        this.setState({ musta: 1 })
      }
      else {
        alert(Boolean(this.state.p1_frame_piste > this.state.p2_frame_piste) ? "Kaikki pallot pussitettu! Pelaaja 1 voitti. Aloita uusi peli" : "Kaikki pallot pussitettu! Pelaaja 2 voitti. Aloita uusi peli");
      }
  } 

  pisteEro() {
    if (this.state.p1_frame_piste > this.state.p2_frame_piste) {
      return this.state.p1_frame_piste - this.state.p2_frame_piste
    } else {
      return this.state.p2_frame_piste - this.state.p1_frame_piste}
  }

    

  render() {
    return (
      
      <div className="container"><h1>Hallintapaneeli</h1>
        <div className="row">
          <div className="col-4">
            Pelaaja1: {this.state.p1_nimi}
          </div>
          <div className="col-4">
          <p>Pelivuorossa pelaaja numero: {this.state.pelaaja}</p>
          </div>
          <div className="col-4">
            Pelaaja2: {this.state.p2_nimi}
          </div>
          <div className="col-4"><PallotKoti
            PPallo={this.PPallo.bind(this)}
            Kelt={this.Kelt.bind(this)}
            Vihr={this.Vihr.bind(this)}
            Rusk={this.Rusk.bind(this)}
            Sini={this.Sini.bind(this)}
            Vaal={this.Vaal.bind(this)}
            Must={this.Must.bind(this)} />
          </div>
          <div className="col-2 PisteLaskuri">Max: {this.state.p1_max_piste}<br></br>Break: {this.state.p1_break_piste}<br></br>Frame:{this.state.p1_frame_piste} </div>
          <div className="col-2 PisteLaskuri">Max: {this.state.p2_max_piste}<br></br>Break: {this.state.p2_break_piste}<br></br>Frame: {this.state.p2_frame_piste}</div>
          <div className="col-4"><PallotVieras
            PPallo={this.PPallo.bind(this)}
            Kelt={this.Kelt.bind(this)}
            Vihr={this.Vihr.bind(this)}
            Rusk={this.Rusk.bind(this)}
            Sini={this.Sini.bind(this)}
            Vaal={this.Vaal.bind(this)}
            Must={this.Must.bind(this)} />
          </div>
        </div>


        <div className="row">
          <div className="col-4">
            <div className="pelaaja1 dropdown">
                <button className="button btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Virhe
                </button>
                <div className="dropdown-menu button" aria-labelledby="dropdownMenuButton">
                    <button className="dropdown-item" onClick={this.virheNelja.bind(this)}>4 virhepistettä </button>
                    <button className="dropdown-item" onClick={this.virheViisi.bind(this)}>5 virhepistettä</button>
                    <button className="dropdown-item" onClick={this.virheKuusi.bind(this)}>6 virhepistettä</button>
                    <button className="dropdown-item" onClick={this.virheSeitseman.bind(this)}>7 virhepistettä</button>
                    <button className="dropdown-item" onClick={this.showModal}>Vapaapallo</button>
                </div>
            </div>
          </div>
          

          <div className="col-4"><button onClick={this.Alustus.bind(this)}>Uusi peli</button></div>
            <div className="col-4">
            <div className="pelaaja2 dropdown">
              <button className="button btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Virhe
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button className="dropdown-item" onClick={this.virheNelja.bind(this)}>4 virhepistettä </button>
                    <button className="dropdown-item" onClick={this.virheViisi.bind(this)}>5 virhepistettä</button>
                    <button className="dropdown-item" onClick={this.virheKuusi.bind(this)}>6 virhepistettä</button>
                    <button className="dropdown-item" onClick={this.virheSeitseman.bind(this)}>7 virhepistettä</button>
                    <button className="dropdown-item" onClick={this.showModal}>Vapaapallo</button>
                </div>
              </div>
          </div>
        </div>

        <div className="row">
          <div className="col-4"><Ajastin /></div>
          <div className="col-2"><button onClick={this.vuoronVaihto.bind(this)}>Vuoronvaihto</button></div>
          <div className="col-2"><button onClick={this.Luovutus.bind(this)}>Luovutus</button></div>
          <div className="col-4">Piste-ero: {this.pisteEro()}</div>
        </div>
        <div className="row">
        <div className="col-4"></div>
          <div id="" className="col-4">
            <p>Aseta punaiset:</p>
            <input type="number" value={(this.props.punaisia)} onChange={this.changeSelectedName} min="0" max="15" step="1" /></div>
          <div id="punaisiaJaljella" className="col-2">{"Punaisia jäljellä: " + this.state.punaisia}</div>
          </div>
        <div className="row">
        <div className="col">
          <div className="field">
            Pisteiden muokkaus:
          </div>
        </div>
        <div className="col"></div>
        <div className="col">
          <div className="field">
            Pisteiden muokkaus:
          </div>
        </div>
        </div>
        <div className="row">
        <div className="col">
          <div className="field">
            <input type="number" value={this.state.p1_frame_piste} onChange={event => this.setState({p1_frame_piste: event.target.valueAsNumber || event.target.value.replace(/\D/,'')})}/>
          </div>
        </div>
        <div className="col"></div>
        <div className="col">
          <div className="field">
            <input type="number" value={this.state.p2_frame_piste} onChange={event => this.setState({p2_frame_piste: event.target.valueAsNumber || event.target.value.replace(/\D/,'')})}/>
          </div>
        </div>
      </div>
        <div className="row">
          <div className="panel panel-default">
            <div className="panel-body">
              <div id="demo">
              </div>
            </div>
          </div>
        </div>

      <VapaaPallo   
        functionCallVirhepiste={this.setVirhepiste.bind(this)}
        functionCallVapaapallo={this.setVapaapallo.bind(this)}    
        onClose={this.showModal}
        show={this.state.show}>
        Syötä virhepisteet ja vapaapallosta saadut pisteet
      </VapaaPallo>
      </div>
      
    )
  }
}