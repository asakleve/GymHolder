import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BackendService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BackendService {

  headers: Headers;

  constructor(public http: Http) {
    console.log('Hello BackendService Provider');
    this.headers = new Headers()
    this.headers.append('Authentication', '0oXxWXkLknkhDa2JWZWF');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
  }

  // public openData: any;

  ////////////////////////////////////////////////////////////////////////
  // USER
  ////////////////////////////////////////////////////////////////////////

  // Hämta specifik användare
  public getUser(id: number) {
    return this.http.get('/backend/user/' + id, { headers: this.headers })
      .map(res => res.json());
  }

  public getUserFriends(id: number) {
    return this.http.get('/backend/allfriends/' + id, { headers: this.headers })
      .map(res => res.json());
  }

  public getUserGroups(id: number) {
    return this.http.get('/backend/user/' + id + '/groups', { headers: this.headers })
      .map(res => res.json());
  }

  public getUserResults(id: number) {
    return this.http.get('/backend/userresults/' + id, { headers: this.headers })
      .map(res => res.json());
  }

  // För inloggning
  public validateUser(usernameOrEmail: string, password: string) {
    return this.http.get('/backend/auth/' + usernameOrEmail + '/' + password, { headers: this.headers })
      .map(res => res.json());
  }

  // För registrering
  public postUser(username: string, email: string, age: number/*, password: string*/) {
    let body = JSON.stringify({
      "id": 0,
      "username": username,
      "email": email,
      "age": age
    });
    return this.http.post('/backend/user', body, { headers: this.headers })
      .map(res => res.json());
  }

  public postAuth(id: number, password: string) {
    let body = JSON.stringify({
      "id": id,
      "pass": password
    });
    console.log("postAuth body: " + body + " and id + pass: " + id + " + " + password);
    return this.http.post('/backend/auth', body, { headers: this.headers })
      .map(res => res.json());
  }

  public putUser(id: number, username: string, email: string, age: number/*, password: string*/) {
    let body = JSON.stringify({
      "id": id,
      "username": username,
      "email": email,
      "age": age
    });
    return this.http.put('/backend/user', body, { headers: this.headers })
      .map(res => res.json());
  }

  public deleteUser(id: number) {
    return this.http.delete('/backend/user/' + id, { headers: this.headers })
      .map(res => res.json());
  }



  ////////////////////////////////////////////////////////////////////////
  // GYM
  ////////////////////////////////////////////////////////////////////////

  public getGym(id: number) {
    return this.http.get('/backend/gym/' + id, { headers: this.headers })
      .map(res => res.json());
  }

  public getAllGyms() {
    return this.http.get('/backend/allgyms', { headers: this.headers })
      .map(res => res.json());
  }

  public getGymSports(id: number) {
    return this.http.get('/backend/gym/' + id + '/sports', { headers: this.headers })
      .map(res => res.json());
  }

  public getGymResults(id: number) {
    return this.http.get('/backend/gymresults/' + id, { headers: this.headers })
      .map(res => res.json());
  }

  public getGymByOpenId(id: string) {
    return this.http.get('/backend/gymbyopen/' + id, { headers: this.headers })
      .map(res => res.json());
  }

  ////////////////////////////////////////////////////////////////////////
  // RESULT
  ////////////////////////////////////////////////////////////////////////

  public getResult(id: number) {
    return this.http.get('/backend/userresults/' + id, { headers: this.headers })
      .map(res => res.json());
  }

  public getResultsByUser(id: number) {
    this.http.get('/backend/userresults/' + id, { headers: this.headers })
      .map(res => res.json())
      .subscribe(data => {
        return data;
      });
  }

  public getAllResults(){
    return this.http.get('/backend/allresults',{ headers: this.headers })
      .map(res => res.json());
  }

  public postResult(userid: number, gymid: number, sportid: number, value: number) {
    let body = JSON.stringify({
      "user": userid,
      "gym": gymid,
      "sport": sportid,
      "value": value
    });
    return this.http.post('/backend/result', body, { headers: this.headers })
      .map(res => res.json());
  }

  public putResult(id: number, userid: number, gymid: number, sportid: number, value: number) {
    let body = JSON.stringify({
      "id": id,
      "user": userid,
      "gym": gymid,
      "sport": sportid,
      "value": value
    });
    return this.http.put('/backend/result/' + id, body, { headers: this.headers })
      .map(res => res.json());
  }

  public deleteResult(id: number) {
    return this.http.delete('/backend/result/' + id, { headers: this.headers })
      .map(res => res.json());
  }



  ////////////////////////////////////////////////////////////////////////
  // SPORT
  ////////////////////////////////////////////////////////////////////////

  public getSport(id: number) {
    return this.http.get('/backend/sport/' + id, { headers: this.headers })
      .map(res => res.json());
  }


  public getAllSports() {
    return this.http.get('/backend/allsports', { headers: this.headers })
      .map(res => res.json());
  }

  ////////////////////////////////////////////////////////////////////////
  // FRIENDS
  ////////////////////////////////////////////////////////////////////////

  public postFriend(user_one_id: number, user_two_id: number) {
    let body = JSON.stringify({
      "id": 0,
      "user_1": user_one_id,
      "user_2": user_two_id
    });
    return this.http.post('/backend/makefriends/', body, { headers: this.headers })
      .map(res => res.json());
  }

  public getFriends(userid: number){
    return this.http.get('/backend/allfriends/' + userid, {headers: this.headers})
    .map(res=> res.json());
  }

  public deleteFriend(user_one_id: number, user_two_id: number){
    return this.http.delete('/backend/deletefriends/' + user_one_id + user_two_id, {headers: this.headers})
    .map(res=> res.json());
  }

  ////////////////////////////////////////////////////////////////////////
  // CHALLANGES
  ////////////////////////////////////////////////////////////////////////

  public getChallenges(userid: number){
    return this.http.get('/backend/challenges/' + userid, {headers: this.headers})
    .map(res=> res.json());
  }

  public postChallenge(user_one_id: number, user_two_id: number){
    let body = JSON.stringify({
      "id": 0,
      "user_1": user_one_id,
      "user_2": user_two_id
    });
    return this.http.post('/backend/makeChallenge/', body, {headers: this.headers})
    .map(res=> res.json());
  }
  // inte testkörd, har ingen dok.på API = osäker på om url:namet stämmer samt parametrar //Åsa


  ////////////////////////////////////////////////////////////////////////
  // MISCELLANEOUS
  ////////////////////////////////////////////////////////////////////////

  public getMessages(user_one_id: number, user_two_id: number) {
    return this.http.get('/backend/messages/' + user_one_id + '/' + user_two_id, { headers: this.headers })
      .map(res => res.json());
  }



}
