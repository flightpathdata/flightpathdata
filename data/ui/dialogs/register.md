---
title:   Register Data
layout: home
nav_order: 1
description: "Introduces Stage Data Dialog"
parent:   Dialogs
permalink: /data/ui/dialogs/register.html
---

#   Registration Dialogs


## The Stage Data Dialog

The Stage Data Dialog enables you to register files manually. A data file is registered under a named-file, an abstract and predictable entity. The named-file entity represents the most recent file it registered. Earlier files and versions of files are available using more specific references and by browsing.

![](/assets/app_images/register_file_dialog_annotated.png)
<div>The Stage Data Dialog can be opened from a data file or any folder in the project files tree on the left</div>
{: .caption }
1. <b>Registered file name</b>. A named-file is an abstract identifier for a series of file versions that take that identity in sequence as they arrive.
2. <b>Source data file path</b>. This is the location where the physical file we are registering is found.
3. <b>Stored data path template</b>. A template modifies how the physical file is stored within the abstract named-file folder tree. A physical file's location may provide semantic indicators, e.g. a year or customer name, and it sets up ways different versions can be found using references. Clicking on the source file location path elements adds tokens to the template that determine dynamically where this file is stored.
4. <b>Stored data path</b>. The path the physical file will be located at within the named-file's directory structure



![](/assets/app_images/register-files-in-directory-annotated.png)
<div>The Stage Data Dialog registers project directories with several options for finding and organizing files as they enter your named-files</div>
{: .caption }
1. <b>Toggle name source</b>. The files registered can each create their own named-file using their own name. Alternatively, you can register all files under a single named-file. 
2. <b>Scan recursively</b>. Check this box to descend the directory structure looking for data files to register. If unchecked, only data files in the top-level directory are registered.
3. <b>Path segments</b>. Templates determine the path structure of the files within a named-file. This can help you separate restated data, files from different sources, test data, and other types of files. Clicking these links adds their token to the template text box below.
4. <b>Regex</b>. You can optionally use a regular expression to select only certain files for registration.
5. <b>Template field and preview</b>. Templates can help FlightPath operations and may simplify integration with other systems. When the checkbox is checked the template you enter becomes the default template used for automated registrations. Below the checkbox you can see the path that the template will become for current registration. 

## The Stage Non-local Data Dialog

![](/assets/app_images/stage-non-local-dialog.png)
<div>The Stage Non-local Data Dialog registers data files that are not on your local drive</div>
{: .caption }
1. <b>Named-file name</b>. The file you register is staged in this named-file.  
2. <b>Location</b>. The location of the file can be in any of the backends configured for this project, regardless of if they are in use for named-files, named-paths, or the archive, or not. If the configuration is present, they can be used.  
3. <b>Project location</b>. You have the option of copying the registered file into the project workspace. It is also possible to copy the registered file back to the project later.  
4. <b>Project-scoped SFTP</b>. If your non-local file is in an unknown SFTP server these two buttons appear offering to setup a named-file-specific SFTP config or the project-wide SFTP backend config.  
5. <b>SFTP backend config</b>. A project as a whole can only have one SFTP backend; although both named-files and named-paths can have their own narrowly scoped SFTP configs. The project-wide backends are primarily used to register files, validation groups, and results.  


<script>
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".nav-list-link").forEach(function (link) {
      if (link.textContent.trim() === "FlightPath Data") {
        link.closest(".nav-list-item").classList.add("active");
      }
    });
    document.querySelectorAll(".nav-list-link").forEach(function (link) {
      if (link.textContent.trim() === "FlightPath Server") {
        link.closest(".nav-list-item").classList.add("active");
      }
    });
  });
</script>


