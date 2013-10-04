/*
 * The contents of this file are subject to the OpenMRS Public License
 * Version 2.0 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://license.openmrs.org
 *
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
 * License for the specific language governing rights and limitations
 * under the License.
 *
 * Copyright (C) OpenMRS, LLC.  All Rights Reserved.
 */
curl(
	{ baseUrl: openhmis.url.resources },
	[
		openhmis.url.backboneBase + 'js/lib/jquery',
		openhmis.url.backboneBase + 'js/openhmis',
		openhmis.url.backboneBase + 'js/lib/backbone-forms',
		openhmis.url.inventoryBase + 'js/model/stockRoom',
        openhmis.url.inventoryBase + 'js/view/stockRoom',
		openhmis.url.backboneBase + 'js/view/generic'
	],
	function($, openhmis) {
		$(function() {
			var stockRoomList = $("#stockRoomList");
            var stockRoomInfo = $("#stockRoomInfo");
            var stockRoomEdit = $("#stockRoomEdit");

			// Display current stock rooms into list
            openhmis.startAddEditScreen(openhmis.StockRoom, {
				listFields: ['name', 'description'],
                listElement: stockRoomList,
                addEditViewType: openhmis.StockRoomDetailView,
                addEditElement: stockRoomInfo
			});
		});
	}
);