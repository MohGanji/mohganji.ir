"""
fabric file used for remote deploy and logging
"""

from __future__ import with_statement
from fabric.api import *

# or @hosts
env.hosts = ['root@192.241.169.182']

CODE_DIR = '/var/www/mohganji.ir/html'


def deploy():
    """
    run fab deploy to deploy updated code
    """
    with cd(CODE_DIR):
        run('git checkout -- .')
        run('git rev-parse HEAD > ./.gitPrevHead.bak')
        run('git pull')

def rollback():
    """
    run 'fab rollback' to rollback to previous commit
    """
    with cd(CODE_DIR):
        run('git checkout `cat ./.gitPrevHead.bak`')
