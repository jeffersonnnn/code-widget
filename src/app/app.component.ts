import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  content = `
  curl https://api.paystack.co/transferrecipient
  -H "Authorization: Bearer YOUR_SECRET_KEY"
  -H "Content-Type: application/json"
  -d '{ type: "nuban", name: "John Doe", account_number: "0001234567",
     bank_code: "058", currency: "NGN"}'
  -X POST
  `;
  content1 = `
  const https = require('https')
  const params = JSON.stringify({
    "type":"nuban",
    "name" : "John Doe",
    "account_number": "0001234567",
    "bank_code": "058",
    "currency": "NGN"
  })
  const options = {
    hostname: 'api.paystack.co',
    port: 443,
    path: '/transferrecipient',
    method: 'POST',
    headers: {
      Authorization: 'Bearer SECRET_KEY',
      'Content-Type': 'application/json'
    }
  }
  const req = https.request(options, res => {
    let data = ''
    resp.on('data', (chunk) => {
      data += chunk
    });
    resp.on('end', () => {
      console.log(JSON.parse(data))
    })
  }).on('error', error => {
    console.error(error)
  })
  req.write(params)
  req.end()
  `;
  content2 = `
  package main

  import (
      "fmt"
      "time"
  )
  func f(from string) {
      for i := 0; i < 3; i++ {
          fmt.Println(from, ":", i)
      }
  }
  func main() {
      f("direct")
      go f("goroutine")
      go func(msg string) {
          fmt.Println(msg)
      }("going")
      time.Sleep(time.Second)
      fmt.Println("done")
  }
  `;
  content3 = `
  {
    "status": true,
    "message": "Account number resolved",
    "data": {
      "account_number": "0001234567",
      "account_name": "Doe Jane Loren",
      "bank_id": 9
    }
  }
  `;
  content4 = `
  {
    "status": true,
    "message": "Account number resolved",
    "data": {
      "account_number": "0001234567",
      "account_name": "Doe Jane Loren",
      "bank_id": 9
    }
  }
  `;
  content5 = `
  {
    "status": true,
    "message": "Account number resolved",
    "data": {
      "account_number": "0001234567",
      "account_name": "Doe Jane Loren",
      "bank_id": 9
    }
  }
  `;
}
