Assignment Project
==================

Simple **React + Vite frontend** and **Express backend** demo for a **student assessment report**.The frontend fetches student data by username and shows scores with progress bars.

Tech Stack
----------

*   **Frontend:** React + Vite + TypeScript
    
*   **Backend:** Node.js + Express
    
*   **API:** REST (JSON)
    

Project Structure
-----------------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   root/  │  ├── frontend/  │   ├── src/home.tsx          # Reads user from URL & renders report  │   ├── src/api/featchapi.js  # API fetch helper  │  ├── backend/  │   └── index.js              # Express server with sample data   `

Backend API
-----------

**Default Port:** 3000 (or PORT env variable)

### Endpoints

*   GET /
    
    *   Returns: { message: "Hello from Express server" }
        
*   GET /health
    
    *   Health check (200 OK)
        
*   GET /api/:username
    
    *   Sample users: rahul, smriti, smran
        
    *   GET /api/rahul
        

**Sample Response**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   {    "data": {      "name": "rahul",      "Overall_score": "8/9",      "Score": [        { "Pronunciation": "9/9" },        { "Fluency": "8/9" },        { "Vocabulary": "7/9" },        { "Grammar": "8.5/9" }      ]    }  }   `

Frontend Behavior
-----------------

*   Route: /:user
    
    *   Example: http://localhost:5173/rahul
        
*   Reads user from URL
    
*   Calls backend using fetchData(user)
    
*   Converts "X/Y" scores into percentages for progress bars
    

Running Locally
---------------

### 1️⃣ Install dependencies

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   cd backend && npm install  cd ../frontend && npm install   `

### 2️⃣ Start backend

Run backend on **port 4000** (recommended):

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   cd backend  PORT=4000 npm run dev   `

ORChange frontend API URL to port 3000.

### 3️⃣ Start frontend

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   cd frontend  npm run dev   `

Open in browser:

*   http://localhost:5173/rahul
    
*   http://localhost:5173/smriti
    
*   http://localhost:5173/smran
    

Common Issues
-------------

*   **ERR\_CONNECTION\_REFUSED** → Backend not running or wrong port
    
*   **CORS error** → Backend allows http://localhost:5173
    
*   **No data shown** → Check console logs & backend port
    

Recommendation (Optional)
-------------------------

Use env variable for API URL:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   VITE_API_BASE_URL=http://localhost:4000/api   `

And in frontend:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;   `

Test API (Optional)
-------------------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   curl http://localhost:4000/api/rahul   `