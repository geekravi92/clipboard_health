# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1: Create Fascility-Agent Mapping Table
Description:
In order for the fascilities to create their custom mapping with the agents provided, we need to create a table for the same and use the custom IDs of the agents whenever we get to generate the report for the fascilties.
Table Name: `fascility_agent_mapping`
Columns: `fascility_id`, `agent_id`, `custom_agent_id`
Index: `fascility_id_agent_id_idx` (`fascility_id`, `agent_id`)


Ticket 2: Frontend: Accept a custom agent ID while assigning an agent to a fascility (Single entry)
Description:
When a fascility assings a worker, let the fascility add the custom agent ID in the form. Create a text field in the form and send the same to the API in the key `customAgentId`.


Ticket 3: Backend: Accept a custom agent ID while assigning an agent to a fascility (Single entry)
Description:
Accept `customAgentId` in the API (assumed) POST `/fascility/agent` and insert into `fascility_agent_mapping` with `fadclity_id` and `agent_id`.


Ticket 4: Frontend: Accept a custom agent ID while assigning an agent to a fascility (Bulk entry)
Description:
Accept `custom_agent_id` in the uploaded files and send the same in the API in the key `customAgentId`.


Ticket 5: Backend: Accept a custom agent ID while assigning an agent to a fascility (Bulk entry)
Description:
Accept `customAgentId` in the API (assumed) POST `/fascility/agent/bulk` and insert into `fascility_agent_mapping` with `fadclity_id` and `agent_id`.


Ticket 6: Update `getShiftsByFacility` method to capture the custom IDs of the agents provided by the fascility
Description:
We need to add the custom IDs of the agents assigned to a fascility instead of their internal databse IDs.
In `getShiftsByFacility` method, fetch the `custom_agent_id` from `fascility_agent_mapping` table using the `fascility_id` and `agent_id`. Now in response, send the `custom_agent_id` instead of `agent_id` in `agentId` key in the response DTO.


Ticket 7: Wrtie Unit Tests
Description:
 1. Test to populate `fascility_agent_mapping` with test data
 2. Test to verify the populated test data in `fascility_agent_mapping`
 3. Test to verfy the custom ID from test data in the method `getShiftsByFacility`
 4. Test to verify whether adding a custom ID in `fascility_agent_mapping` DB is called
