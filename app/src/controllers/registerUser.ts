
import  asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import * as userService from "../services/userService"
import { errorBroadCaster } from "../utils/errorBroadCaster";

export const registerUser = asyncHandler( async (req : Request, res: Response) => {
  try {
    console.log("printing body",req.body)
    const user = await userService.create(req.body);
    res.status(201).json(user);
 } catch (error: unknown) {
    if (error instanceof Request) {
    if (error instanceof SyntaxError && error.message.includes('Bad control character in string literal in JSON')) {
      console.error('JSON parsing error:', error.message);
      res.status(400).json("registerUser" +'Invalid JSON: Contains unescaped control characters.');
    } else {
      console.error('An unexpected error occurred:', error);
      res.status(500).send("registerUser" +'An internal server error occurred.');
    }
    //   if (error instanceof Error) {
    //     res.status(500).send("Caught an Error:" + error.message);
    //   } else {
    //     res.send("Caught an unknown error:" +  error);
    //   }
    }else {
      // Catch other unexpected errors
      res.status(500).json('An unexpected error occurred:' + error);
    }
}
});

/**
 * fetch('/api/data')
  .then(response => {
    // Check if the response was successful (status code 200-299)
    if (!response.ok) {
      // If not successful, throw the response to be caught later
      // This allows handling non-2xx status codes, which might also return non-JSON
      throw response; 
    }
    // Attempt to parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Handle the successfully parsed JSON data
    console.log('API response data:', data);
  })
  .catch(error => {
    // Handle errors during the fetch or JSON parsing
    if (error instanceof Response) {
      // If the error is a Response object (from `throw response` above)
      error.text().then(errorMessage => {
        console.error('API error (non-OK status):', error.status, errorMessage);
      }).catch(parseError => {
        // Handle potential errors in parsing the error message itself
        console.error('Error parsing error response:', parseError);
      });
    } else if (error instanceof SyntaxError) {
      // Catch specifically the JSON parsing error
      console.error('Invalid JSON received:', error.message);
    } else {
      // Catch other unexpected errors
      console.error('An unexpected error occurred:', error);
    }
  });
 */