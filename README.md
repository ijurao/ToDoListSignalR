This project was created with the idea of ​​depending and investigating different aspects of the application development stack. The main idea is to gather possible requirements in a given domain and solve it using technologies available in these times.

This particular project is a classic todolist application but the difference is that it can be "collaborative" (not in its entirety). Users can be assigned worker or administrator profiles (they are already created). A working user can create new tasks, mark them as pending or completed, as well as remove them. The particularity of this application is that a panel is available where users connected to the application are displayed.

In this development, the following technological characteristics stand out:

Using .Net Core 3.1 as the base framework for the backend.

The use of TCP communication via SignalR, a powerful high-level tool that simplifies development when programming requirements where the use of bidirectional TCP SOCKETS connections is necessary.

The use of Angular 9 as a frontend tool, completely separating the presentation of data with business logic in two different applications. Making the most of the power of SPA applications.

The use of infinite scroll.

Using boostrap 4 as css framwork to achieve modern styles.

The use of indentity role to manage users and profiles provided by .Net Core

The use of JWT tokens to manage user authentication and authorization.

The users to enter are user: i@gmail.com up to i from 0 to 9, the password is always the same: 'password'. The user admin@gmail.com with password 123456 is the only one who has administrator permissions.
