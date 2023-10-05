[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/_IojtdoU)
# StackIt Hiring Assignment

### Welcome to StackIt's hiring assignment! 🚀

**If you didn't get here through github classroom, are you sure you're supposed to be here? 🤨**


We are glad to have you here, but before you read what you're going to beat your head over for the next few hours (maybe days?), let's get a few things straight:
- We really appreciate honesty. Don't copy anyone else's assignment, it'll only sabotage your chances :P
- You're free to use any stack, and library of your choice. Use whatever you can get your hands on, on the internet!
- We love out of the box solutions. We prefer to call it *Jugaad* 
- This might be just the first round, but carries the most importance of all. Give your best, and we hope you have a fun time solving this problem.

## ✨ **Problem Statement: Crafting a CSV Importer for Google Sheets** ✨

**Context**:
Data analysts around the world 🌍, handle massive amounts of data to derive meaningful insights for their organization 📊. Among the tools they use, Google Sheets 📈 stands out due to its ease of use, accessibility, and collaborative features. However, many analysts have identified a recurring pain point: the cumbersome process of importing CSV files into Google Sheets repeatedly.

A typical week of an analyst in an e-commerce company 🛒 involves receiving multiple CSV files 📁 containing sales, inventory, customer feedback, and more. The data from these files needs to be meticulously analyzed and presented in the company’s weekly meetings. However, instead of diving directly into analysis, most analysts need to spend an inordinate amount of time just importing and structuring these CSV files into Google Sheets ⏳. This repetitive, time-consuming task reduces the efficiency of these professionals and delays the extraction of crucial insights 😫.

**Today, you are going to make their lives better.**

**Problem Statement**:
Make a CSV Importer for Google Sheets that lets users drag and drop CSV files onto the Google Sheet. The moment they drop the CSV file, allow them to select which columns to import 🗂️.

You get brownie points 🍪 if you can make it even easier by allowing them to filter the data as well before importing it into Google Sheets 🔍.

**Other pointers**:
- Import to Sheet – After validation and mapping, devise a method to populate the data into a chosen Google Sheet, either appending to existing data or creating a new sheet 📥📋.
- Optimize for Large Files – Large datasets are common in analytics. Your solution should effectively handle large CSV files (~15MB CSV file) without causing performance issues or prolonged waiting times 📈📦.

## Submission ⏰
The timeline for this submission is: **9AM, 30th Sept, 2023 - 12PM, 2nd Oct, 2023**

Some things you might want to take care of:
- Make use of git and commit your steps!
- Use good coding practices.
- Write beautiful and readable code. Well-written code is nothing less than a work of art.
- Use semantic variable naming.
- Your code should be organized well in files and folders which is easy to figure out.
- If there is something happening in your code that is not very intuitive, add some comments.
- Add to this README at the bottom explaining your approach (brownie points 😋)

Make sure you finish the assignment a little earlier than this so you have time to make any final changes.

Once you're done, make sure you **record a video** showing your project working. The video should **NOT** be longer than 120 seconds. While you record the video, tell us about your biggest blocker, and how you overcame it! Don't be shy, talk us through, we'd love that.

We have a checklist at the bottom of this README file, which you should update as your progress with your assignment. It will help us evaluate your project.

- ✅ My code's working just fine! 🥳
- ✅ I have recorded a video showing it working and embedded it in the README ▶️
- ✅ I have tested all the normal working cases 😎
- [ ] I have even solved some edge cases (brownie points) 💪
- ✅ I added my very planned-out approach to the problem at the end of this README 📜

## Got Questions❓
Feel free to check the discussions tab, you might get something of help there. Check out that tab before reaching out to us. Also, did you know, the internet is a great place to explore 😛

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

