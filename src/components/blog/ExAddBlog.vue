<template>
	<div>
		<form action="">
			<!--  General -->
			<div class="form-group">
				<h2 class="heading">Booking & contact</h2>
				<div class="controls">
					<input
						@focus="onFocus($event)"
						@blur="onBlur"
						type="text"
						id="name"
						class="floatLabel"
						name="name"
					/>
					<label for="name">Name</label>
				</div>
				<div class="controls">
					<input
						@focus="onFocus($event)"
						@blur="onBlur"
						type="text"
						id="email"
						class="floatLabel"
						name="email"
					/>
					<label for="email">Email</label>
				</div>
				<div class="controls">
					<input
						@focus="onFocus($event)"
						@blur="onBlur"
						type="tel"
						id="phone"
						class="floatLabel"
						name="phone"
					/>
					<label for="phone">Phone</label>
				</div>
				<div class="grid">
					<div class="col-2-3">
						<div class="controls">
							<input
								@focus="onFocus($event)"
								@blur="onBlur"
								type="text"
								id="street"
								class="floatLabel"
								name="street"
							/>
							<label for="street">Street</label>
						</div>
					</div>
					<div class="col-1-3">
						<div class="controls">
							<input
								@focus="onFocus($event)"
								@blur="onBlur"
								type="number"
								id="street-number"
								class="floatLabel"
								name="street-number"
							/>
							<label for="street-number">Number</label>
						</div>
					</div>
				</div>
				<div class="grid">
					<div class="col-2-3">
						<div class="controls">
							<input
								@focus="onFocus($event)"
								@blur="onBlur"
								type="text"
								id="city"
								class="floatLabel"
								name="city"
							/>
							<label for="city">City</label>
						</div>
					</div>
					<div class="col-1-3">
						<div class="controls">
							<input
								@focus="onFocus($event)"
								@blur="onBlur"
								type="text"
								id="post-code"
								class="floatLabel"
								name="post-code"
							/>
							<label for="post-code">Post Code</label>
						</div>
					</div>
				</div>
				<div class="controls">
					<input
						@focus="onFocus($event)"
						@blur="onBlur"
						type="text"
						id="country"
						class="floatLabel"
						name="country"
					/>
					<label for="country">Country</label>
				</div>
			</div>
			<!--  Details -->
			<div class="form-group">
				<h2 class="heading">Details</h2>
				<div class="grid">
					<div class="col-1-4 col-1-4-sm">
						<div class="controls">
							<input
								@focus="onFocus($event)"
								@blur="onBlur"
								type="date"
								id="arrive"
								class="floatLabel"
								name="arrive"
								value="<?php echo date('Y-m-d'); ?>"
							/>
							<label for="arrive" class="label-date"
								><i class="fa fa-calendar"></i
								>&nbsp;&nbsp;Arrive</label
							>
						</div>
					</div>
					<div class="col-1-4 col-1-4-sm">
						<div class="controls">
							<input
								@focus="onFocus($event)"
								@blur="onBlur"
								type="date"
								id="depart"
								class="floatLabel"
								name="depart"
								value="<?php echo date('Y-m-d'); ?>"
							/>
							<label for="depart" class="label-date"
								><i class="fa fa-calendar"></i
								>&nbsp;&nbsp;Depart</label
							>
						</div>
					</div>
				</div>
				<div class="grid">
					<div class="col-1-3 col-1-3-sm">
						<div class="controls">
							<i class="fa fa-sort"></i>
							<select
								@focus="onFocus($event)"
								@blur="onBlur"
								class="floatLabel"
							>
								<option value="blank">0</option>
								<option value="1">1</option>
								<option value="2" selected>2</option>
								<option value="3">3</option>
							</select>
							<label for="fruit"
								><i class="fa fa-male"></i
								>&nbsp;&nbsp;People</label
							>
						</div>
					</div>
					<div class="col-1-3 col-1-3-sm">
						<div class="controls">
							<i class="fa fa-sort"></i>
							<select
								@focus="onFocus($event)"
								@blur="onBlur"
								class="floatLabel"
							>
								<option value="blank"></option>
								<option value="deluxe" selected>
									With Bathroom
								</option>
								<option value="Zuri-zimmer">
									Without Bathroom
								</option>
							</select>
							<label for="fruit">Room</label>
						</div>
					</div>

					<div class="col-1-3 col-1-3-sm">
						<div class="controls">
							<i class="fa fa-sort"></i>
							<select
								@focus="onFocus($event)"
								@blur="onBlur"
								class="floatLabel"
							>
								<option value="blank"></option>
								<option value="single-bed">Zweibett</option>
								<option value="double-bed" selected>
									Doppelbett
								</option>
							</select>
							<label for="fruit">Bedding</label>
						</div>
					</div>
				</div>
				<div class="grid">
					<p class="info-text">
						Please describe your needs e.g. Extra beds, children's
						cots
					</p>
					<br />
					<div class="controls">
						<textarea
							@focus="onFocus($event)"
							@blur="onBlur"
							name="comments"
							class="floatLabel"
							id="comments"
						></textarea>
						<label for="comments">Comments</label>
					</div>
					<button type="submit" value="Submit" class="col-1-4">
						Submit
					</button>
				</div>
			</div>
			<!-- /.form-group -->
		</form>
	</div>
</template>

<script>
	export default {
		name: "ExAddProduct",
		data() {
			return {};
		},
		created() {
			console.log("Tạo Product");
		},
		methods: {
			onFocus(event) {
				event.target.nextSibling.classList.add("active");
			},
			onBlur(event) {
				console.log(event.target.value);
				if (event.target.value === "") {
					console.log(event.target.value);
					event.target.nextSibling.classList.remove("active");
				}
			},
		},
	};
</script>

<style scoped lang="scss">
	@import "@/assets/css/colors.scss";
	form {
		padding: 4em 10%;
	}

	.form-group {
		margin-bottom: 20px;
	}

	h2.heading {
		font-size: 18px;
		text-transform: uppercase;
		font-weight: 300;
		text-align: left;
		color: #506982;
		border-bottom: 1px solid #506982;
		padding-bottom: 3px;
		margin-bottom: 20px;
	}

	.controls {
		text-align: left;
		position: relative;
	}
	.controls input[type="text"],
	.controls input[type="email"],
	.controls input[type="number"],
	.controls input[type="date"],
	.controls input[type="tel"],
	.controls textarea,
	.controls button,
	.controls select {
		padding: 10px 10px 10px 20px;
		font-size: 14px;
		border: 1px solid #c6c6c6;
		width: 100%;
		margin-bottom: 18px;
		color: #888;
		font-family: "Lato", "sans-serif";
		font-size: 16px;
		font-weight: 300;
		-moz-border-radius: 2px;
		-webkit-border-radius: 2px;
		border-radius: 4px;
		-moz-transition: all 0.3s;
		-o-transition: all 0.3s;
		-webkit-transition: all 0.3s;
		transition: all 0.3s;
	}
	.controls input[type="text"]:focus,
	.controls input[type="text"]:hover,
	.controls input[type="email"]:focus,
	.controls input[type="email"]:hover,
	.controls input[type="number"]:focus,
	.controls input[type="number"]:hover,
	.controls input[type="date"]:focus,
	.controls input[type="date"]:hover,
	.controls input[type="tel"]:focus,
	.controls input[type="tel"]:hover,
	.controls textarea:focus,
	.controls textarea:hover,
	.controls button:focus,
	.controls button:hover,
	.controls select:focus,
	.controls select:hover {
		outline: none;
		border-color: #9fb1c1;
	}
	.controls input[type="text"]:focus + label,
	.controls input[type="text"]:hover + label,
	.controls input[type="email"]:focus + label,
	.controls input[type="email"]:hover + label,
	.controls input[type="number"]:focus + label,
	.controls input[type="number"]:hover + label,
	.controls input[type="date"]:focus + label,
	.controls input[type="date"]:hover + label,
	.controls input[type="tel"]:focus + label,
	.controls input[type="tel"]:hover + label,
	.controls textarea:focus + label,
	.controls textarea:hover + label,
	.controls button:focus + label,
	.controls button:hover + label,
	.controls select:focus + label,
	.controls select:hover + label {
		color: #27a746;
		cursor: text;
	}
	.controls .fa-sort {
		position: absolute;
		right: 10px;
		top: 17px;
		color: #999;
	}
	.controls select {
		-moz-appearance: none;
		-webkit-appearance: none;
		cursor: pointer;
	}
	.controls label {
		position: absolute;
		left: 10px;
		top: 10px;
		width: auto;
		color: #999;
		font-size: 16px;
		display: inline-block;
		padding: 2px 10px;
		font-weight: 400;
		background-color: rgba(255, 255, 255, 0);
		-moz-transition: color 0.3s, top 0.3s, background-color 0.8s;
		-o-transition: color 0.3s, top 0.3s, background-color 0.8s;
		-webkit-transition: color 0.3s, top 0.3s, background-color 0.8s;
		transition: color 0.3s, top 0.3s, background-color 0.8s;
		background-color: white;
	}
	.controls label.active {
		top: -15px;
		color: #555;
		background-color: white;
		width: auto;
	}
	.controls textarea {
		resize: none;
		height: 200px;
	}

	option {
		background-color: $light;
	}

	button {
		cursor: pointer;
		background-color: #1b3d4d;
		border: none;
		color: #fff;
		padding: 12px 0;
		float: right;
	}
	button:hover {
		background-color: #224c60;
	}

	.clear:after {
		content: "";
		display: table;
		clear: both;
	}

	.grid {
		background: white;
	}
	.grid:after {
		/* Or @extend clearfix */
		content: "";
		display: table;
		clear: both;
	}

	[class*="col-"] {
		float: left;
		padding-right: 10px;
	}
	.grid [class*="col-"]:last-of-type {
		padding-right: 0;
	}

	.col-2-3 {
		width: 66.66%;
	}

	.col-1-3 {
		width: 33.33%;
	}

	.col-1-2 {
		width: 50%;
	}

	.col-1-4 {
		width: 25%;
	}

	@media (max-width: 760px) {
		.col-1-4-sm,
		.col-1-3,
		.col-2-3 {
			width: 100%;
		}

		[class*="col-"] {
			padding-right: 0px;
		}
	}
	.col-1-8 {
		width: 12.5%;
	}
</style>
