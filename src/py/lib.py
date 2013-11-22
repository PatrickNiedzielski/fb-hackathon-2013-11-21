# Learn Python -- library functions
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

import gevent

_north = [0, -1]
_south = [0, 1]
_east = [1, 0]
_west = [-1, 0]

class World:
    def __init__(self):
        self.grid = []
        for i in range(11):
            row = [];
            for j in range(19):
                row.append(None)
                self.grid.append(row)

_world = World()

class Sign:
    def __init__(self, position, text):
        self.position = position
        self.text = text
        _world.grid[position[1]][position[0]] = self

    def __str__(self):
        return "{ \"entity\": \"sign\" }";

class Wall:
    def __init__(self, position):
        self.position = position
        _world.grid[position[1]][position[0]] = self

    def __str__(self):
        return "{ \"entity\": \"wall\" }";

class Player:
    _direction = [0, 1]
    _messages = []

    def __init__(self, name, position, other_ = None):
        self._name = name
        self._position = position
        other = other_
        _world.grid[position[1]][position[0]] = self

    def __str__(self):
        str_dirs = { _north : "N", _south : "S",
                     _east : "E", _west : "W" }
        str_dir = str_dirs[self._direction]
        return "{ \"entity\": \"player\", " + \
            "\"info\": {\"name\": " + self._name + ", \"direction\": " + \
            str_dir + "}}"

    def _turn_dir(self, dir):
        self._direction = dir
        print str(_world.grid)

    def turn_left(self):
        self._turn_dir(_west)
        gevent.sleep(0)

    def turn_right(self):
        self._turn_dir(_east)
        gevent.sleep(0)

    def turn_up(self):
        self._turn_dir(_north)
        gevent.sleep(0)

    def turn_down(self):
        self._turn_dir(_south)
        gevent.sleep(0)

    def _move_dir(self, dir):
        temppos = map(lambda x,y: x+y, self._position, dir)
        if (temppos[1] < 0 or temppos[1] >= len(_world.grid) or
            temppos[0] < 0 or temppos[0] >= len(_world.grid[0])):
            raise Exception("Outside Map")
        if (_world.grid[temppos[1]][temppos[0]] != None):
            raise Exception("Collision")
        _world.grid[self._position[1]][self._position[0]] = None
        self._position = temppos
        _world.grid[self._position[1]][self._position[0]] = self
        self._turn_dir(dir);
        print str(_world.grid)

    def move_left(self, num = 1):
        for i in range(num):
            self._move_dir(_west)
        gevent.sleep(0)

    def move_right(self, num = 1):
        for i in range(num):
            self._move_dir(_east)
        gevent.sleep(0)

    def move_up(self, num = 1):
        for i in range(num):
            self._move_dir(_north)
        gevent.sleep(0)

    def move_down(self, num = 1):
        for i in range(num):
            self._move_dir(_south)
        gevent.sleep(0)

    def _run_script(self, script):
        exec script

    def say(self, message):
        print str([self._name, message]);
        _messages.append(message)
        gevent.sleep(0)

    def get_in_front(self):
        temppos = map(lambda x,y: x+y, self._position, dir)
        if (temppos[1] < 0 or temppos[1] >= len(_world.grid) or
            temppos[0] < 0 or temppos[0] >= len(_world.grid[0])):
            raise Exception("Outside Map")
        return _world.grid[temppos[1]][temppos[0]]

# Positions should be overridden in each level script
player1 = Player(1, [1, 0])
player2 = Player(2, [0, 1], player1)
player1.other = player2
