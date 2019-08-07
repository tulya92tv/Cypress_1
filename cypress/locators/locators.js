// logo
$x("//div[@id='lower-logo']/h1/a")

//menu-home
$x("//nav[@class='main-nav']/ul/li[1]/a")
//How to do in reverse order?
$x("//a[text()='Home']/../../??nav[@class='main-nav']??")
//or with css selector
$$("nav[class='main-nav'] > ul > li:nth-child(1) > a")

// menu-tranning
$$("li[class='folder-collection folder'] > a")
$x("//li[@class='folder-collection folder']/a")
// live session
$$("nav[class='main-nav'] > ul > li:nth-child(2) > div[class='subnav'] > ul > li[class='events-collection'] > a")
$x("//nav[@class='main-nav']/ul/li[2]/div[@class='subnav']/ul/li[@class='events-collection']/a")
// elegant browser automation
$$("nav[class='main-nav'] > ul > li[class='folder-collection folder'] > div > ul > li[class='external-link'] > a")
$x("//nav[@class='main-nav']/ul/li[@class='folder-collection folder']/div/ul/li[@class='external-link']/a")

// menu-news
$$("nav[class='main-nav'] > ul > li[class='blog-collection'] > a")
$x("//nav[@class='main-nav']/ul/li[@class='blog-collection']/a")

//menu-about
$$("nav[class='main-nav'] > ul > li:nth-child(4) > a")
$x("//nav[@class='main-nav']/ul/li[4]/a")

// text 'Welcome to the Training Ground'
$$("div[id='block-ec928cee802cf918d26c'] > div[class='sqs-block-content'] > p")
$x("//div[@id='block-ec928cee802cf918d26c']/div[@class='sqs-block-content']/p")

// input "An Input Field"
$$("input[id='ipt1']")
$x("//input[@id='ipt1']")

// text-lable "An Input Field"
$$("label[name='i1_label']")
$x("//div[@id='block-yui_3_17_2_4_1509912487714_3776']/div[@class='sqs-block-content']/label[@name='i1_label']")

// button_1
$$("button[id='b1']")
$x("//button[@id='b1']")

// button_2
$$("button[id='b2']")
$x("//button[@id='b2']")

// text-lable "Another Input Field"
$$("label[name='i2_label']")
$x("//div[@id='block-yui_3_17_2_4_1509912487714_3776']/div[@class='sqs-block-content']/label[@name='i2_label']")

// input "Another Input Field"
$$("input[id='ipt2']")
$x("//input[@id='ipt2']")

// button_3
$$("button[id='b3']")
$x("//button[@id='b3']")

// button_4
$$("button[id='b4']")
$x("//button[@id='b4']")

// text-product_1
//???????????????????????????????????????????????????????????????????
$x("//div[@id='div1']/span/b[text()='Product 1']")

// price-product_1
//???????????????????????????????????????????????????????????????????
$x("//b[text()='Product 1']/../../p")

// text-product_2
//???????????????????????????????????????????????????????????????????
$x("//div[@id='div1']/span/b[text()='Product 2']")

// price-product_2
//???????????????????????????????????????????????????????????????????
$x("//b[text()='Product 2']/../../p")

// text "A dropdown of three things..."
$$("div[class='sqs-block-content'] > h2")
$x("//div[@class='sqs-block-content']/h2")

// select
$$("select[id='sel1'] > option[value='first']")
$$("select[id='sel1'] > option[value='second']")
$$("select[id='sel1'] > option[value='third']")

$x("//select[@id='sel1']/option[@value='first']")
$x("//select[@id='sel1']/option[@value='second']")
$x("//select[@id='sel1']/option[@value='third']")

// social-links-linkedin
$$("a[class='sqs-svg-icon--wrapper linkedin']")
$x("//div[@id='socialLinks']/a[1]")

// social-links-twitter
$$("a[class='sqs-svg-icon--wrapper twitter']")
$x("//div[@id='socialLinks']/a[2]")

// text "Powered by "
$$("div[id='block-yui_3_17_2_1_1411672901316_31172'] > div[class='sqs-block-content'] > p")
$x("//p[text()='POWERED BY ']")
$x("//div[@id='block-yui_3_17_2_1_1411672901316_31172']/div[@class='sqs-block-content']/p")

// link-squarespace
$$("div[id='block-yui_3_17_2_1_1411672901316_31172'] > div[class='sqs-block-content'] > p > a")
$x("//div[@id='block-yui_3_17_2_1_1411672901316_31172']/div[@class='sqs-block-content']/p/a")