
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if(message.connection_key === 1){
	console.log(message.text);

		// creating new div for the output data
		let	link_container = document.createElement("div");
		link_container.setAttribute("id", "link_container");
		document.body.appendChild(link_container); 
		
		let link_content_box = document.createElement("div");
		link_content_box.setAttribute("id", "link_content_box");
		link_container.appendChild(link_content_box);

		// close button section 
		let modalBtnProperties = document.createElement("div");
		modalBtnProperties.setAttribute("id", "modalBtnProperties");
		link_container.appendChild(modalBtnProperties);
		link_content_box.appendChild(modalBtnProperties);	

			let closeBtnColumn = document.createElement("div");
			closeBtnColumn.setAttribute("id", "closeBtnColumn");
			closeBtnColumn.setAttribute("class", "float-right-element");
			modalBtnProperties.appendChild(closeBtnColumn);

				let spanClose = document.createElement("span");
				closeBtnColumn.appendChild(spanClose);
				let spanCloseText = document.createTextNode("×");
				spanClose.setAttribute("id", "spanClose");
				spanClose.appendChild(spanCloseText);

		// header-section
		let contentHeader = document.createElement('div');
		contentHeader.setAttribute("id", "contentHeader");
		contentHeader.setAttribute("class", "clear-content");
		link_content_box.appendChild(contentHeader);

			let hdrTitleTxt = document.createElement('h2');
			hdrTitleTxt.setAttribute("id", "hdrTitleTxt");
			hdrTitleTxt.setAttribute("class", "contentText");
			let hdrTitleTxtValue = document.createTextNode("Link Checker");
			contentHeader.appendChild(hdrTitleTxt);
			hdrTitleTxt.appendChild(hdrTitleTxtValue);

			let hdrTitleColumn = document.createElement('div');
			hdrTitleColumn.setAttribute("id", "hdrTitleColumn");
			hdrTitleColumn.setAttribute("class", "float-left-element");
			contentHeader.appendChild(hdrTitleColumn);

						
			let hdrOptionColumn = document.createElement('div');
			hdrOptionColumn.setAttribute("id", "hdrOptionColumn");
			hdrOptionColumn.setAttribute("class", "float-right-element");
			contentHeader.appendChild(hdrOptionColumn);		

					let hdrOptionTxt = document.createElement('h3');
					hdrOptionTxt.setAttribute("id", "hdrOptionTxt");
					hdrOptionTxt.setAttribute("class", "contentText");
					let hdrOptionTxtValue = document.createTextNode("Filter");
					hdrOptionColumn.appendChild(hdrOptionTxt);
					hdrOptionTxt.appendChild(hdrOptionTxtValue);

				let filterOptionContainer = document.createElement('div');
				filterOptionContainer.setAttribute("id", "filterOptionContainer");
				filterOptionContainer.setAttribute("class", "float-left-element");
				hdrOptionColumn.appendChild(filterOptionContainer);

				const filterButtons = [
								{	
									type: 'BUTTON',
									name: 'All',
									id: 'filterBtn1',
									value: 'a',
								},
								{
									type: 'BUTTON',
									name: 'Header',
									id: 'filterBtn2',
									value: 'header a',
								},
								// {
								// 	type: 'BUTTON',
								// 	name: 'Content',
								// 	id: 'filterBtn3',
								// 	value: '#fl-main-content a',
								// },
								{	
									type: 'BUTTON',
									name: 'Footer',
									id: 'filterBtn4',
									value: 'footer a',
								}
							];

				const filter_buttons_queries = filterButtons.map( (item, index, array) => {
				
					let filterOptionChild = document.createElement('div');
					filterOptionChild.setAttribute("class", "float-left-element filterOptionChild");
					filterOptionContainer.appendChild(filterOptionChild);

					let filterBtn = document.createElement(item.type);
					filterBtn.setAttribute('id', item.id);
					filterBtn.setAttribute('class', 'filterButtons');
					let filterBtnTxtValue = document.createTextNode(item.name);
					filterBtn.appendChild(filterBtnTxtValue);
					filterOptionChild.appendChild(filterBtn);
					
				}); //end of filter_buttons_queries
		// end of header section

		// content goes here
		let mainContent = document.createElement('div');
		mainContent.setAttribute("id", "mainContent");
		mainContent.setAttribute("class", "clear-content");
		link_content_box.appendChild(mainContent);

		let contentTitleRow = document.createElement('div');
		contentTitleRow.setAttribute("id", "contentTitleRow");
		contentTitleRow.setAttribute("class", "float-left-element");
		mainContent.appendChild(contentTitleRow);

		let titleColumnID = document.createElement('div');
		titleColumnID.setAttribute("id", "titleColumnID");
		titleColumnID.setAttribute("class", "float-left-element mainContentColumn");
		contentTitleRow.appendChild(titleColumnID);

			let titleID = document.createElement('h4');
			titleID.setAttribute("id", "titleID");
			titleID.setAttribute("class", "contentText");
			let titleIDValue = document.createTextNode("Link ID");
			titleColumnID.appendChild(titleID);
			titleID.appendChild(titleIDValue);

		let titleColumnName = document.createElement('div');
		titleColumnName.setAttribute("id", "titleColumnName");
		titleColumnName.setAttribute("class", "float-left-element mainContentColumn");
		contentTitleRow.appendChild(titleColumnName);

			let titleName = document.createElement('h4');
			titleName.setAttribute("id", "titleName");
			titleName.setAttribute("class", "contentText");
			let titleNameValue = document.createTextNode("Link Label");
			titleColumnName.appendChild(titleName);
			titleName.appendChild(titleNameValue);

		let titleColumnHref = document.createElement('div');
		titleColumnHref.setAttribute("id", "titleColumnHref");
		titleColumnHref.setAttribute("class", "float-left-element mainContentColumn");
		contentTitleRow.appendChild(titleColumnHref);

			let titleHref = document.createElement('h4');
			titleHref.setAttribute("id", "titleHref");
			titleHref.setAttribute("class", "contentText");
			let titleHrefValue = document.createTextNode("Link content");
			titleColumnHref.appendChild(titleHref);
			titleHref.appendChild(titleHrefValue);

		let titleColumnTarget = document.createElement('div');
		titleColumnTarget.setAttribute("id", "titleColumnTarget");
		titleColumnTarget.setAttribute("class", "float-left-element mainContentColumn");
		contentTitleRow.appendChild(titleColumnTarget);

			let titleTarget = document.createElement('h4');
			titleTarget.setAttribute("id", "titleTarget");
			titleTarget.setAttribute("class", "contentText");
			let titleTargetValue = document.createTextNode("Link Target");
			titleColumnTarget.appendChild(titleTarget);
			titleTarget.appendChild(titleTargetValue);

		let cntContentTableContainer = document.createElement('div');
		cntContentTableContainer.setAttribute("id", "cntContentTableContainer");
		cntContentTableContainer.setAttribute("class", "float-left-element data-containers");
		mainContent.appendChild(cntContentTableContainer);
				
				// let contentLinks = Array.from(document.querySelectorAll('a'));;
					filter('a');

					document.getElementById('filterBtn1').addEventListener("click", () => {
						document.getElementById('cntContentTableContainer').innerHTML = '';
						filter('a');
					});

					document.getElementById('filterBtn2').addEventListener("click", () => {
						document.getElementById('cntContentTableContainer').innerHTML = '';
						filter('header a');
					});

					// document.getElementById('filterBtn3').addEventListener("click", () => {
					// 	document.getElementById('cntContentTableContainer').innerHTML = '';
					// 	filter('body a');
					// });

					document.getElementById('filterBtn4').addEventListener("click", () => {
						document.getElementById('cntContentTableContainer').innerHTML = '';
						filter('footer a');
					});

				function filter(data) {
					if(data.length){
						switch(data){ //upon clicking buttons, result will base on the selected section.
							case 'header a':
								generateData(data);
								break;
							// case 'body a':
							// 	generateData(data);
							// 	break;
							case 'footer a':
								generateData(data);
								break;
							default:
								generateData(data);
						}
						
						function generateData(rawData){
							if(rawData.length){
								let filterValue = Array.from(document.querySelectorAll(rawData));
								
								const mapped_links_href_content = filterValue.map((item, index, array) => {

											let contentRow = document.createElement('div');
											contentRow.setAttribute("id", "linkRow"+index);
											contentRow.setAttribute("class", "float-left-element contentRow LinkRow");
											cntContentTableContainer.appendChild(contentRow);

											let contentID = document.createElement('div');
											contentID.setAttribute("class", "float-left-element contentIDColumn");
											contentRow.appendChild(contentID);
												let idTxt = document.createElement('p');
												idTxt.setAttribute("id", "idTxt"+index);
												idTxt.setAttribute("class", "contentText LinkValue");
												let idTxtValue = document.createTextNode(index);
												contentID.appendChild(idTxt);
												idTxt.appendChild(idTxtValue);

											let contentName = document.createElement('div');
											contentName.setAttribute("class", "float-left-element contentNameColumn");
											contentRow.appendChild(contentName);

												let nameTxt = document.createElement('p');
												nameTxt.setAttribute("class", "contentText LinkValue");
												let nameTxtValue = '';
													// this condition triggers if links are social media links or phone no or email or blank
													if(item.ariaLabel === 'Facebook' || item.host === 'www.facebook.com' || item.host === 'facebook.com'){
														nameTxt.style.color = "#87bdff";
														nameTxtValue = document.createTextNode('Facebook');
													}else if(item.ariaLabel === 'Instagram' || item.host === 'www.instagram.com' || item.host === 'instagram.com'){
														nameTxt.style.color = "#f57d97";
														nameTxtValue = document.createTextNode('Instagram');
													}else if(item.ariaLabel === 'Twitter' || item.host === 'www.twitter.com' || item.host === 'twitter.com'){
														nameTxt.style.color = "#00acee";
														nameTxtValue = document.createTextNode('Twitter');
													}else if(item.ariaLabel === 'LinkedIn' || item.host === 'www.linkedin.com' || item.host === 'linkedin.com'){
														nameTxt.style.color = "#3ba5d9";
														nameTxtValue = document.createTextNode('LinkedIn');
													}else if(item.ariaLabel === 'Youtube' || item.host === 'www.youtube.com' || item.host === 'youtube.com'){
														nameTxt.style.color = "#ff3d6a";
														nameTxtValue = document.createTextNode('Youtube');
													}else if(item.ariaLabel === 'Yelp' || item.host === 'www.yelp.com' || item.host === 'yelp.com'){
														nameTxt.style.color = "#e83723";
														nameTxtValue = document.createTextNode('Yelp');
													}else if(item.ariaLabel === 'Pinterest' || item.host === 'www.pinterest.com' || item.host === 'pinterest.com'){
														nameTxt.style.color = "#ff616a";
														nameTxtValue = document.createTextNode('Pinterest');
													}else if(item.ariaLabel === 'GoDaddy' || item.host === 'www.godaddy.com' || item.host === 'godaddy.com'){
														nameTxt.style.color = "#95f2f4";
														nameTxtValue = document.createTextNode('GoDaddy');
													}else if(item.protocol === 'tel:'){
															nameTxt.style.color = "#f6a021";
															nameTxt.style.fontStyle = 'italic';
															nameTxtValue = document.createTextNode('Phone Number');
													}else if(item.protocol === 'sms:'){
															nameTxt.style.color = "#f6a021";
															nameTxt.style.fontStyle = 'italic';
															nameTxtValue = document.createTextNode('SMS Number');
													}else if(item.protocol === 'mailto:'){
														nameTxt.style.color = "#f6a021";
														nameTxt.style.fontStyle = 'italic';
														nameTxtValue = document.createTextNode('Email Address');
													}else if(item.host === 'https://goo.gl' || item.host === 'goo.gl'){
														nameTxt.style.color = "#f6a021";
														nameTxt.style.fontStyle = 'italic';
														nameTxtValue = document.createTextNode('Google Maps');
													}else if(item.text === "" || item.innerText === "" || item.textContent === ""){
														nameTxt.style.color = "#fff";
														nameTxtValue = document.createTextNode('No Label');			
													}
													else{
														nameTxtValue = document.createTextNode(item.text);
													}
												
												contentName.appendChild(nameTxt);
												nameTxt.appendChild(nameTxtValue);

											let contentHref = document.createElement('div');
											contentHref.setAttribute("class", "float-left-element contentHrefColumn");
											contentRow.appendChild(contentHref);

												let hrefTxt = document.createElement('p');
												hrefTxt.setAttribute("class", "contentText LinkValue");
												let hrefTxtValue = document.createTextNode(item.href);
												contentHref.appendChild(hrefTxt);
												hrefTxt.appendChild(hrefTxtValue);
												
												// RegExp Pattern for Email Address and Phone number accordingly to our standard pattern
												const phonePattern = new RegExp(/[a-z]{3}\:+\++[1]+\d{10}/, 'g');
																			//sample pattern tel:+12345678910

												const emailPattern = new RegExp(/[a-z]{6}\:[a-z0-9_]+\@[a-z0-9 - .]+\.[a-z]{3}/, 'g');
																			//sample pattern mailto:email_01@domain.com
												
												if(item.protocol === 'tel:'){ // Phone/Telephone Validation wrong target match
													if (!phonePattern.test(item.href)){									
														hrefTxt.style.color = "#fe8080";
													}else{
														hrefTxt.style.color = "#ffffff";
													}
												}

												if(item.protocol === 'sms:'){ // Phone/Telephone Validation wrong target match
													if (!phonePattern.test(item.href)){									
														hrefTxt.style.color = "#fe8080";
													}else{
														hrefTxt.style.color = "#ffffff";
													}
												}

												if(item.protocol === 'mailto:'){ // Email Validation wrong target match
													// Regex
													// let emailPattern = /[a-z]{6}+\:[a-z0-9_]+\@[a-z 0-9 -]+\.(com|edu|net|ph)/g;
													if (!emailPattern.test(item.href)){									
														hrefTxt.style.color = "#fe8080";
													}else{
														hrefTxt.style.color = "#ffffff";
													}
												}

											if(item.target === ''){
												item.target = '_self';
												let contentTarget = document.createElement('div');
												contentTarget.setAttribute("class", "float-left-element contentTargetColumn");
												contentRow.appendChild(contentTarget);

												let targetTxt = document.createElement('p');
												targetTxt.setAttribute("class", "contentText LinkValue");
												let targetTxtValue = document.createTextNode(item.target);
												contentTarget.appendChild(targetTxt);
												targetTxt.appendChild(targetTxtValue);
											}
											else{
												let contentTarget = document.createElement('div');
												contentTarget.setAttribute("class", "float-left-element contentTargetColumn");
												contentRow.appendChild(contentTarget);

												let targetTxt = document.createElement('p');
												targetTxt.setAttribute("class", "contentText LinkValue");
												let targetTxtValue = document.createTextNode(item.target);
												contentTarget.appendChild(targetTxt);
												targetTxt.appendChild(targetTxtValue);

												
												
												// if(item.protocol === 'tel:'){ // Phone/Telephone Validation wrong target match
												// 	if (!phonePattern.test(item.href)){									
												// 		hrefTxt.style.color = "#fe8080";
												// 	}else{
												// 		hrefTxt.style.color = "#ffffff";
												// 	}
												// }

												// if(item.protocol === 'mailto:'){ // Email Validation wrong target match
												// 	// Regex
												// 	// let emailPattern = /[a-z]{6}+\:[a-z0-9_]+\@[a-z 0-9 -]+\.(com|edu|net|ph)/g;
												// 	if (!emailPattern.test(item.href)){									
												// 		hrefTxt.style.color = "#fe8080";
												// 	}else{
												// 		hrefTxt.style.color = "#ffffff";
												// 	}
												// }


												//+++++ Value Validations Ver 2: June 06 2020 10pm+++++//
												if(item.protocol === 'tel:' && item.target === '_blank'){ // Phone/Telephone Validation wrong target match
													if (!phonePattern.test(item.href)){									
														hrefTxt.style.color = "#fe8080";
													}else{
														hrefTxt.style.color = "#ffffff";
													}
														targetTxt.style.color = "#fe8080";
												}else if(item.protocol === 'sms:' && item.target === '_blank'){
													if (!phonePattern.test(item.href)){									
														hrefTxt.style.color = "#fe8080";
													}else{
														hrefTxt.style.color = "#ffffff";
													}
														targetTxt.style.color = "#fe8080";
												}else if(item.protocol === 'mailto:' && item.target === '_blank'){ // Email Validation wrong target match
													
													// Regex
													// let emailPattern = /[a-z]{6}+\:[a-z0-9_]+\@[a-z 0-9 -]+\.(com|edu|net|ph)/g;
													if (!emailPattern.test(item.href)){									
														hrefTxt.style.color = "#fe8080";
													}else{
														hrefTxt.style.color = "#ffffff";
													}
													targetTxt.style.color = "#fe8080";
													
												}else if(item.host === 'goo.gl' && item.target === '_self'){ //for maps
													nameTxt.style.color = "#fe8080";
													targetTxt.style.color = "#fe8080";
												}else if(item.host === 'www.facebook.com' && item.target === '_self'){ // Map validation wrong target match
													idTxt.style.color = "#fe8080";
													nameTxt.style.color = "#fe8080";
													hrefTxt.style.color = "#fe8080";
													targetTxt.style.color = "#fe8080";
												}else if(item.host === 'www.instagram.com' && item.target === '_self'){ // Map validation wrong target match
													idTxt.style.color = "#fe8080";
													nameTxt.style.color = "#fe8080";
													hrefTxt.style.color = "#fe8080";
													targetTxt.style.color = "#fe8080";
												}else if(item.host === 'twitter.com' && item.target === '_self'){ // Map validation wrong target match
													idTxt.style.color = "#fe8080";
													nameTxt.style.color = "#fe8080";
													hrefTxt.style.color = "#fe8080";
													targetTxt.style.color = "#fe8080";
												}else if(item.host === 'linkedin.com' && item.target === '_self'){ // Map validation wrong target match
													idTxt.style.color = "#fe8080";
													nameTxt.style.color = "#fe8080";
													hrefTxt.style.color = "#fe8080";
													targetTxt.style.color = "#fe8080";
												}else if(item.host === 'youtube.com' && item.target === '_self'){ // Map validation wrong target match
													idTxt.style.color = "#fe8080";
													nameTxt.style.color = "#fe8080";
													hrefTxt.style.color = "#fe8080";
													targetTxt.style.color = "#fe8080";
												}else if(item.host === 'yelp.com' && item.target === '_self'){ // Map validation wrong target match
													idTxt.style.color = "#fe8080";
													nameTxt.style.color = "#fe8080";
													hrefTxt.style.color = "#fe8080";
													targetTxt.style.color = "#fe8080";
												}else if(item.host === 'pinterest.com' && item.target === '_self'){ // Map validation wrong target match
													idTxt.style.color = "#fe8080";
													nameTxt.style.color = "#fe8080";
													hrefTxt.style.color = "#fe8080";
													targetTxt.style.color = "#fe8080";
												}else{
													// console.log('Job Well Done! Prior Links are good.');
												} //what a lengthy one...

											}
												
										}); //end of mapped_links_href_contents
											
									}else{
										let contentRow = document.createElement('div');
										contentRow.setAttribute("id", "linkRow");
										contentRow.setAttribute("class", "float-left-element contentRow LinkRow");
										cntContentTableContainer.appendChild(contentRow);

											let emptyHeading = document.createElement('h2');
											emptyHeading.setAttribute("id", "emptyHeading");
											emptyHeading.setAttribute("class", "contentText emptyHeadingClass");
											let emptyHeadingValue = document.createTextNode('Empty Query...');
											contentID.appendChild(emptyHeading);
											contentRow.appendChild(emptyHeadingValue);
											console.log('Empty');
									} //end of ifrawdata
						} // end of generateData
					}else{
						let contentRow = document.createElement('div');
						contentRow.setAttribute("id", "linkRow");
						contentRow.setAttribute("class", "float-left-element contentRow LinkRow");
						cntContentTableContainer.appendChild(contentRow);

							let emptyHeading = document.createElement('h2');
							emptyHeading.setAttribute("id", "emptyHeading");
							emptyHeading.setAttribute("class", "contentText emptyHeadingClass");
							let emptyHeadingValue = document.createTextNode('Empty Query...');
							contentID.appendChild(emptyHeading);
							contentRow.appendChild(emptyHeadingValue);
					}
						
				} //filterfunction
		// end of page section

		// footer section
		let contentFooter = document.createElement('div');
		contentFooter.setAttribute("id", "contentFooter");
		contentFooter.setAttribute("class", "clear-content");
		link_content_box.appendChild(contentFooter);

			let FooterColumn = document.createElement('div');
			FooterColumn.setAttribute("id", "FooterColumn");
			FooterColumn.setAttribute("class", "float-left-element");
			contentFooter.appendChild(FooterColumn);

				let ftrTitleTxt = document.createElement('h2');
				ftrTitleTxt.setAttribute("id", "ftrTitleTxt");
				ftrTitleTxt.setAttribute("class", "contentText");
				let ftrTitleTxtValue = document.createTextNode('Page URL:');
				FooterColumn.appendChild(ftrTitleTxt);
				ftrTitleTxt.appendChild(ftrTitleTxtValue);

					let ftrTitleTxtSpan = document.createElement('span');
					ftrTitleTxtSpan.setAttribute("id", "ftrTitleTxtSpan");
					ftrTitleTxtSpan.setAttribute("class", "contentText");
					let ftrTitleTxtSpanValue = document.createTextNode(window.location);
					ftrTitleTxt.appendChild(ftrTitleTxtSpan);
					ftrTitleTxtSpan.appendChild(ftrTitleTxtSpanValue);

						let ftrDescription = document.createElement('p');
						ftrDescription.setAttribute("id", "ftrDescription");
						ftrDescription.setAttribute("class", "contentText");
						let ftrDescriptionValue = document.createTextNode("Link Checker v2.3");
						FooterColumn.appendChild(ftrDescription);
						ftrDescription.appendChild(ftrDescriptionValue);
		// end of footer section

		let btn = document.getElementById("closeBtnColumn").addEventListener("click", () => {
			link_container.style.display = 'none';
			location.reload();
		});

		document.addEventListener('keyup', event => {
				if(event.key === "Escape"){
					link_container.style.display = 'none';
					location.reload();
				}
		});

		// let bgClose = document.getElementById("link_container").addEventListener("click", function(){
		// 	link_container.style.display = 'none';
		// 	location.reload();
		// });

	}else{
		console.log('Background Connection failed');
	}
});

