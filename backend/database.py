import mysql.connector

def get_db_connection():
    try:
        connection=mysql.connector.connect(
            host="localhost",
            user="root",
            password="Venu@66691",
            database="storifydb"
        )
        print("✅ Database connection successful!")
        return connection
    except mysql.connector.Error as err:
        print(f"❌ Error: {err}")
        return None
    
def create_tables():
    connection=get_db_connection()
    if not connection:
        print("Failed to connect to the database.")
        return
    
    cursor=connection.cursor()

    try:
        create_users_table="""
        CREATE TABLE IF NOT EXISTS users(
        user_id INT NOT NULL AUTO_INCREMENT,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        dob DATE NOT NULL,
        username VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (user_id)
        )
        """

        cursor.execute(create_users_table)

    except mysql.connector.Error as err:
        print(f" SQL Error: {err}")
    
    finally:
        cursor.close()
        connection.close()
        print("Database connection closed.")

if __name__ =="__main__":
    create_tables()

