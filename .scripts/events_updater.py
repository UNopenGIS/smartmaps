import requests
from icalendar import Calendar, Event
from datetime import datetime, timedelta, date
from dateutil.rrule import rrulestr, rrule
from pytz import utc,timezone
import os

# Define the time zones
timezones = {
    'Los Angeles': 'America/Los_Angeles',
    'New York': 'America/New_York',
    'Rome': 'Europe/Rome',
    'New Delhi': 'Asia/Kolkata',
    'Tokyo': 'Asia/Tokyo'
}
import os

# Get the directory of the script
script_dir = os.path.dirname(os.path.realpath(__file__))

# Get the parent directory
parent_dir = os.path.dirname(script_dir)

# Construct the paths to the files
events_index_path = os.path.join(parent_dir, 'docs/events/index.md')
i18n_index_path = os.path.join(parent_dir,'i18n', 'ja', 'docusaurus-plugin-content-docs', 'current', 'events', 'index.md')

# Use the paths to open the files

# URLs of your public Google Calendars' iCals
urls = [
    "https://calendar.google.com/calendar/ical/unsmartmaps%40gmail.com/public/basic.ics",
    "https://calendar.google.com/calendar/ical/f4287ffe010843e55344f352ed82b5e05fc754f923bf7b52320cf9580d492889%40group.calendar.google.com/public/basic.ics"
]

# Fetch and parse the calendars
calendars = [Calendar.from_ical(requests.get(url).text) for url in urls]

# Get current time and time 1 month from now
now = datetime.now(utc)
one_month_later = now + timedelta(days=30)

# Collect all events
events = []
from dateutil.rrule import rrulestr as dateutil_rrulestr
from dateutil.tz import tzlocal

for calendar in calendars:
    for component in calendar.walk():
        if isinstance(component, Event):
            dtstart = component.get('dtstart').dt
            print(f"Original dtstart: {dtstart}")  # Debug line
            if isinstance(dtstart, date) and not isinstance(dtstart, datetime):
                dtstart = datetime.combine(dtstart, datetime.min.time(), tzinfo=tzlocal())
            elif isinstance(dtstart, datetime) and dtstart.tzinfo is None:
                dtstart = dtstart.replace(tzinfo=tzlocal())
            rrule = component.get('rrule')
            if rrule:
                rrule = dateutil_rrulestr(rrule.to_ical().decode(), dtstart=dtstart)
                for recurrence in rrule:
                    events.append((recurrence, component.get('summary')))
            else:
                events.append((dtstart, component.get('summary')))

# Sort events by start time
events.sort()

# Track the number of events for each day
event_counts = {}
for start_time, _ in events:
    day = start_time.strftime("%Y-%m-%d")
    if day not in event_counts:
        event_counts[day] = 1
    else:
        event_counts[day] += 1


# # Write past events to a separate markdown file
# with open('past_events.md', 'w') as f:
#     for start_time, summary in reversed(events):
#         if start_time < now:
#             f.write(f"## {summary}\n")
#             f.write(f"Start time: {start_time}\n\n")
#             # Check if the markdown file exists in the events directory
#             filename = start_time.strftime("%Y-%m-%d") + ".md"
#             if not os.path.exists(events_dir + filename):
#                 with open(events_dir + filename, 'w') as event_file:
#                     event_file.write(f"## {summary}\n")
#                     event_file.write(f"Start time: {start_time}\n\n")
#             # Check if the translated markdown file exists in the i18n directory
#             if not os.path.exists(i18n_dir + filename):
#                 with open(i18n_dir + filename, 'w') as event_file:
#                     event_file.write(f"## {summary}\n")
#                     event_file.write(f"Start time: {start_time}\n\n")


# Define the paths to the past events files
past_events_path = os.path.join(parent_dir, 'docs/events/past_events.md')
past_i18n_events_path = os.path.join(parent_dir,'i18n', 'ja', 'docusaurus-plugin-content-docs', 'current', 'events', 'past_events.md')


# Read existing events from the current markdown files
existing_events = {}
with open(events_index_path, 'r',encoding='utf-8') as f, open(i18n_index_path, 'r',encoding='utf-8') as f_i18n:
    print('Events index path: ', events_index_path)
    lines_f = f.readlines()
    lines_f_i18n = f_i18n.readlines()
    lines = lines_f + lines_f_i18n
    for line in lines:
        if 'index.md' in line:
            continue
        if '|' in line:
            event = line.split('|')[1].strip()
            print(f"Processing event: {event}")  # Debugging line
            existing_events[event] = True

events_folder_path = os.path.join(parent_dir, 'docs', 'events')
i18n_folder_path = os.path.join(parent_dir, 'i18n', 'ja', 'docusaurus-plugin-content-docs', 'current', 'events')

# Write upcoming events to the current markdown files
with open(events_index_path, 'w', encoding='utf-8') as f, \
     open(i18n_index_path, 'w', encoding='utf-8') as f_i18n, \
     open(past_events_path, 'w', encoding='utf-8') as past_f, \
     open(past_i18n_events_path, 'w', encoding='utf-8') as past_f_i18n:
        f.write("# Events\n\n")
        f.write("The following events are upcoming:\n\n")
        f.write("| Event | Date | Time| Location |\n")
        f.write("| --- | --- | --- |----|\n")

        f_i18n.write("# イベントのお知らせ\n\n")
        f_i18n.write("このページでは、プロジェクトに関連するイベントを紹介します。\n\n")
        f_i18n.write("| イベント | 日付 |時間| 場所 |\n")
        f_i18n.write("| --- | --- | --- |---|\n")

        for start_time, summary in events:
            # Get the event count for this day
            day = start_time.strftime("%Y-%m-%d")
            count = event_counts[day]

            # Append the event count to the filename if there are multiple events on this day
            filename = day
            if count > 1:
                filename += "-" + str(count)
                event_counts[day] -= 1
            filename += ".md"

            # Check if the event is in the past
            if start_time < now:
                # Write the event to the past events file
                past_f.write(f"| [{summary}]({filename}) | [{start_time.strftime('%Y-%m-%d')}]({filename}) | [Time](https://www.timeanddate.com/worldclock/fixedtime.html?msg={summary.replace(' ', '+')}&iso={start_time.strftime('%Y%m%dT%H%M')}&p1=1440&ah=1) | [Register](#) |\n")
                past_f_i18n.write(f"| [{summary}]({filename}) | [{start_time.strftime('%Y-%m-%d')}]({filename}) | [Time](https://www.timeanddate.com/worldclock/fixedtime.html?msg={summary.replace(' ', '+')}&iso={start_time.strftime('%Y%m%dT%H%M')}&p1=1440&ah=1) | [Register](#) |\n")  # Replace with translated summary
            elif now <= start_time <= one_month_later and summary not in existing_events:
                # Write the event to the current markdown files
                f.write(f"| [{summary}]({filename}) | [{start_time.strftime('%Y-%m-%d')}]({filename}) | [Time](https://www.timeanddate.com/worldclock/fixedtime.html?msg={summary.replace(' ', '+')}&iso={start_time.strftime('%Y%m%dT%H%M')}&p1=1440&ah=1) | [Register](#) |\n")
                f_i18n.write(f"| [{summary}]({filename}) | [{start_time.strftime('%Y-%m-%d')}]({filename}) | [Time](https://www.timeanddate.com/worldclock/fixedtime.html?msg={summary.replace(' ', '+')}&iso={start_time.strftime('%Y%m%dT%H%M')}&p1=1440&ah=1) | [Register](#) |\n")  # Replace with translated summary

# Define the directory paths
events_folder_path = os.path.join(parent_dir, 'docs', 'events')
i18n_folder_path = os.path.join(parent_dir, 'i18n', 'ja', 'docusaurus-plugin-content-docs', 'current', 'events')

for start_time, summary in events:
    # Get the event count for this day
    day = start_time.strftime("%Y-%m-%d")
    count = event_counts[day]

    # Append the event count to the filename if there are multiple events on this day
    filename = day
    if count > 1:
        filename += "-" + str(count)
        event_counts[day] -= 1
    filename += ".md"

    # Include the directory path in the filename
    filename_en = os.path.join(events_folder_path, filename)
    filename_ja = os.path.join(i18n_folder_path, filename)

    # Check if the event is in the future
    if now <= start_time <= one_month_later and summary not in existing_events:
        # Write the event to the current markdown files
        if not os.path.exists(filename_en):
            with open(filename_en, 'w', encoding='utf-8') as f:
                f.write(f"## {summary}\n")
                f.write(f"Start time: {start_time}\n\n")
                f.write("## When is this event?\n\n")
                f.write("- Time for Los Angeles\n")
                f.write("- Time for New York\n")
                f.write("- Time for Rome\n")
                f.write("- Time for New Delhi\n")
                f.write("- Time for Tokyo\n")
        if not os.path.exists(filename_ja):
            with open(filename_ja, 'w', encoding='utf-8') as f_i18n:
                f_i18n.write(f"## {summary}\n")  # Replace with translated summary
                f_i18n.write(f"開始時間: {start_time}\n\n")
                f_i18n.write("## このイベントはいつですか？\n\n")
                f_i18n.write("- ロサンゼルスの時間\n")
                f_i18n.write("- ニューヨークの時間\n")
                f_i18n.write("- ローマの時間\n")
                f_i18n.write("- ニューデリーの時間\n")
                f_i18n.write("- 東京の時間\n")