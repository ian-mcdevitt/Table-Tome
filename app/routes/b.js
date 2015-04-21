document.write('\
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\
<html xmlns="http://www.w3.org/1999/xhtml">\
	<head>\
		<meta name="viewport" content="width=device-width" />\
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\
		<link href="styles.css" media="all" rel="stylesheet" type="text/css" />\
	</head>\
	\
	<body itemscope itemtype="http://schema.org/EmailMessage">\
		<table class="body-wrap">\
			<tr>\
				<td></td>\
				<td class="container" width="600">\
					<div class="content">\
						<table class="main" width="100%" cellpadding="0" cellspacing="0" itemprop="action" itemscope itemtype="http://schema.org/ConfirmAction">\
							<tr>\
								<td class="content-wrap">\
									<meta itemprop="name" content="Confirm Email"/>\
									<table width="100%" cellpadding="0" cellspacing="0">\
										<tr>\
											<td class="content-block">\
												Thank you for signing up for Table Tome! Please confirm your email address by clicking the link below.\
											</td>\
										</tr>\
										<tr>\
											<td class="content-block">\
												We we will send you an email update when new features on our site become available.  We appreciate your support!\
											</td>\
										</tr>\
										<tr>\
											<td class="content-block" itemprop="handler" itemscope itemtype="http://schema.org/HttpActionHandler">\
												<a  href="http://localhost:8080/api/mail/validate/' + req.body.email + '" class="btn-primary" itemprop="url">Confirm email address</a>\
											</td>\
										</tr>\
										<tr>\
											<td class="content-block">\
												&mdash; The Table Tome Development Team\
											</td>\
										</tr>\
									</table>\
								</td>\
							</tr>\
						</table>\
					</div>\
				</td>\
				<td></td>\
			</tr>\
		</table>\
	</body>\
</html> \
');