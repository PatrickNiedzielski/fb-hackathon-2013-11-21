# Learn Python -- script loading and running
# Copyright (C) 2013 Cornell FB Hackathon Team.
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.

_script1_length = input()
_script1 = ""
for i in range(_script1_length):
    _script1 += raw_input() + "\n"
_script2_length = input()
_script2 = ""
for i in range(_script2_length):
    _script2 += raw_input() + "\n"

def run_script1():
    exec _script1

def run_script2():
    exec _script2

gevent.joinall([
    gevent.spawn(lambda: Player._run_script(player1, _script1)),
    gevent.spawn(lambda: Player._run_script(player2, _script2)),
])
