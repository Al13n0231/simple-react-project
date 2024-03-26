from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# List of allowed origins (e.g., "http://localhost:3000", "https://www.example.com")
# Use ["*"] for development to allow all origins
origins = [
    "http://localhost:3000",  # Adjust this to your frontend's address
    "https://www.example.com",
]

# Add CORSMiddleware to the application instance
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows specified origins
    allow_credentials=True,  # Allows cookies to be included in cross-origin HTTP requests
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


user_info = {
    "name": "Allen",
    "age": "19",
    "job": "software engineer"
}

# this is our api endpoint
@app.get("/echo")
async def root(a :str, b :str):
    print("value a: ", a)
    print("value b: ", b)
    # Use the is_valid_string function to validate each string
    valid_a = is_vaild_string(a)
    valid_b = is_vaild_string(b)
    print(valid_a, valid_b)
    
    # Prepare the response that includes both the concatenated string and the validation result
    concatenated = a + b
    validation_result = "yes" if valid_a and valid_b else "no"
    
    # Return a JSON object with both the concatenated string and the validation result
    return {
        "concatenated": concatenated,
        "validation": validation_result
    }


def is_vaild_string (s :str) ->bool:
    return s.isalpha()

# @TODO check the value 
@app.get("/valid-string")
async def check_string(a :str, b :str):
    vaild_a = is_vaild_string(a)
    vaild_b = is_vaild_string(b)
    # a 'valid string' is one without any numbers
    # @TODO implement your endpoints like this
    return "yes" if vaild_a and vaild_b else "no"



# @TODO 
# the endpoint should check if the value is a valid string
# example: 3213hello <-- returns no because it has numbers
# example: hello world <--- returns yes because no numbers