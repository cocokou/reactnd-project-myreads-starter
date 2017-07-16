App Functionality
In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

Currently Reading
Want to Read
Read

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

The main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. To keep the interface consistent, you may consider re-using some of the code you used to display the books on the main page.

When a book is on a bookshelf, it should have the same state on both the main application page and the search page.

<!-- The search page also has a link to / (the root URL), which leads back to the main page. -->

When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.

Submission Requirements
Your submission should include all of the files necessary to install and launch your web application on a local web server. For files that include JSX, please refrain from using the .jsx extension (you can prefer .js). You can assume that your reviewer will have npm installed on their machine.

Even if you don't end up using the starter code, you should probably still use create-react-app to generate your submission since it's the easiest way to ensure you have everything the project reviewer will need to install and run your app.

Considerations
The focus of this project is on writing functional React code, not on making the page beautiful. Feel free to spend some time working on your layout and CSS if you want to, but the goal for this project is correct functionality.

componentDidMount(){
 	API.getAll().then((books)=>{
 		this.setState({
 			books
 		})
 	})
}
```
数据分类
```

}

在此应用程序中，主页显示“书架”列表，每个列表包含多个图书。

每本书都有一个下拉框，可以让您选择该书的书架。当你另选择一个书架时，这本书就移到那个架上。
注意下拉框的默认值应该是本书所在的书架。

主页面有一个链接到 搜索页面，您可以查找到图书，添加到你的书库library

搜索页面有可用于查找图书的输入框。随着输入值更改，下面要显示匹配的图书，
书一样要有下拉框，以便你可以添加图书到书库，
为了使界面风格保持一致，建议重新使用在主页上显示图书的一些代码。

一本书，在主页面和搜索页面上都应该在相同的书架。

搜索页面有一个链接可返回到主页面。

当您从搜索页面返回主页面时，应该马上可以看到您在搜索页面上所做的所有选择。