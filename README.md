## ✨ **Crafting a CSV Importer for Google Sheets** ✨

**Context**:
Data analysts around the world 🌍, handle massive amounts of data to derive meaningful insights for their organization 📊. Among the tools they use, Google Sheets 📈 stands out due to its ease of use, accessibility, and collaborative features. However, many analysts have identified a recurring pain point: the cumbersome process of importing CSV files into Google Sheets repeatedly.

A typical week of an analyst in an e-commerce company 🛒 involves receiving multiple CSV files 📁 containing sales, inventory, customer feedback, and more. The data from these files needs to be meticulously analyzed and presented in the company’s weekly meetings. However, instead of diving directly into analysis, most analysts need to spend an inordinate amount of time just importing and structuring these CSV files into Google Sheets ⏳. This repetitive, time-consuming task reduces the efficiency of these professionals and delays the extraction of crucial insights 😫.


**Problem Statement**:
Make a CSV Importer for Google Sheets that lets users drag and drop CSV files onto the Google Sheet. The moment they drop the CSV file, allow them to select which columns to import 🗂️.

## Developer's Section
To solve the problem of creating a CSV Importer for Google Sheets that allows users to drag and drop CSV files and select columns to import, I followed a well-structured approach. Here's how you came up with the solution step by step:
1. **Understanding the Problem Statement:**
2. **Creating the HTML User Interface:**
3. **Styling the User Interface:**
4. **Handling File Upload:**
5. **Selecting Columns to Import:**
6. **Implementing the Import Function:**
7. **Google Apps Script Server-Side Code:**
8. **Logging and Error Handling:**
9. **Deployment and Integration:**
10. **User Experience and Design:**


In summary, my solution involved a combination of HTML, CSS, and JavaScript for the user interface and Google Apps Script for server-side processing. I followed a systematic approach to address each aspect of the problem, from file upload to column selection and data import, while ensuring a professional and user-friendly design.

Here are some pointers that can help in understanding the code and it's functions:

**1. `onOpen()` (Google Apps Script):**

This function is a special function in Google Apps Script. It is automatically executed when the Google Sheets document is opened.

- **Purpose:** It creates a custom menu in the Google Sheets interface under the name "CSV Importer." This menu item allows users to trigger the `showSidebar()` function to display the CSV importer sidebar.

**2. `showSidebar()` (Google Apps Script):**

- **Purpose:** This function generates the HTML content of the sidebar and displays it as a sidebar in the Google Sheets interface.

**3. `handleFile(event)` (JavaScript):**

- **Purpose:** This function is called when the user selects a CSV file for upload. It handles the file input event, reads the selected CSV file's contents, and displays the column selection section with checkboxes based on the CSV headers.

**4. `createCheckboxes(data)` (JavaScript):**

- **Purpose:** This function dynamically generates checkboxes and labels for column selection based on the headers in the CSV file. It is called when the CSV data is loaded.

**5. `importData()` (JavaScript):**

- **Purpose:** This function is executed when the user clicks the "Import to Google Sheets" button. It collects the selected column indexes (based on which checkboxes are checked) and then sends both the CSV data and the selected columns to the `importCSVData()` function in the Google Apps Script.

**6. `importCSVData(csvData, selectedColumns)` (Google Apps Script):**

- **Purpose:** This function handles the actual import of CSV data into the Google Sheet.
- **Parameters:**
  - `csvData`: The CSV data as a string.
  - `selectedColumns`: An array containing the indexes of the columns selected by the user.

- **Steps:**
  - Parse the CSV data into a 2D array.
  - Clear the existing content of the sheet.
  - Filter the columns of the CSV data based on the selected columns (indexes).
  - Batch process the filtered data to improve performance for large files by appending it to the Google Sheet in smaller chunks.

- **Logging and Error Handling:** It includes error handling to catch and log any errors that occur during the import process.

**7. HTML and CSS (index.html):**

- The HTML and CSS sections of the code define the structure and styling of the sidebar user interface. It sets up the appearance, layout, and behavior of the dialogue box, including the logo, file input field, column selection checkboxes, and the import button.

In summary, the JavaScript functions handle user interactions, such as selecting a file, choosing columns for import, and triggering the import process. The Google Apps Script functions manage the integration with Google Sheets, including creating a custom menu, displaying the sidebar, and importing CSV data into the Google Sheet. The HTML and CSS provide the visual and interactive components for the user interface.

**Demo Video:**



https://github.com/StackItHQ/stackit-hiring-assignment-SonalikaBharadwaj/assets/99278250/d04a4bbf-cffd-474b-843c-295b78aa4e28

