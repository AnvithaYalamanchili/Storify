from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import mysql.connector
from database import get_db_connection
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from datetime import date


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class User(BaseModel):
    firstName: str
    lastName: str
    email: str
    dob: date
    username: str
    password: str

class Login(BaseModel):
    email:str
    password:str

@app.post("/register")
def register_user(user: User):
    connection=get_db_connection()
    cursor=connection.cursor()
    if not connection:
        raise HTTPException(status_code=500, detail="Database connection failed.")
    try:
        insert_query = """
        INSERT INTO users (first_name, last_name, email, dob, username, password)
        VALUES (%s, %s, %s, %s, %s, %s)
        """
        values = (
            user.firstName,
            user.lastName,
            user.email,
            user.dob,
            user.username,
            user.password 
        )
        cursor.execute(insert_query, values)
        connection.commit()
        return {"message": "User registered successfully."}
    except mysql.connector.IntegrityError as e:
        raise HTTPException(status_code=400, detail=str(e))
    
@app.post("/login")
def login_user(login_data: Login):
    connection = get_db_connection()
    if not connection:
        raise HTTPException(status_code=500, detail="Database connection failed.")

    cursor = connection.cursor(dictionary=True)
    
    query = "SELECT * FROM users WHERE email = %s"
    cursor.execute(query, (login_data.email,))
    user = cursor.fetchone()
    
    if not user or user["password"] != login_data.password:
        raise HTTPException(status_code=401, detail="Invalid email or password")

    return {"message": "Login successful", "username": user["username"]}

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, log_level="debug", reload=True)